import create, { State } from 'zustand'
import produce from 'immer'
import { Connection, PublicKey, Transaction } from '@solana/web3.js'
import * as anchor from '@project-serum/anchor'

import { EndpointInfo, WalletAdapter } from '../@types/types'

// @ts-ignore
import poolIdl from '../idls/ido_pool'

import {
  getOwnedTokenAccounts,
  getMint,
  ProgramAccount,
  TokenAccount,
  MintAccount,
  getTokenAccount,
} from '../utils/tokens'
import { findLargestBalanceAccountForMint } from '../hooks/useLargestAccounts'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { createAssociatedTokenAccount } from '../utils/associated'
import { sendTransaction } from '../utils/send'

export const ENDPOINTS: EndpointInfo[] = [
  {
    name: 'mainnet-beta',
    url: 'https://api.mainnet-beta.solana.com/',
    websocket: 'https://api.mainnet-beta.solana.com/',
    programId: '',
    poolKey: '',
  },
  {
    name: 'devnet',
    url: 'https://api.devnet.solana.com',
    websocket: 'https://api.devnet.solana.com',
    programId: '2oBtRS2AAQfsMxXQfg41fKFY9zjvHwSSD7G5idrCFziV',
    poolKey: 'ZfSZf2xrNLBrfY37TwJLoHv9qdKBQpkbZuPrq5FT8U9',
  },
  {
    name: 'localnet',
    url: 'http://localhost:8899',
    websocket: 'http://localhost:8899',
    programId: 'FF8zcQ1aEmyXeBt99hohoyYprgpEVmWsRK44qta3emno',
    poolKey: '8gswb9g1JdYEVj662KXr9p6p9SMgR77NryyqvWn9GPXJ',
  },
]

const CLUSTER = 'devnet'
const ENDPOINT = ENDPOINTS.find((e) => e.name === CLUSTER)
const DEFAULT_CONNECTION = new Connection(ENDPOINT.url, 'recent')
const WEBSOCKET_CONNECTION = new Connection(ENDPOINT.websocket, 'recent')
const PROGRAM_ID = new PublicKey(ENDPOINT.programId)
const POOL_PK = new PublicKey(ENDPOINT.poolKey)

interface PoolAccount {
  distributionAuthority: PublicKey
  endDepositsTs: anchor.BN
  endIdoTs: anchor.BN
  nonce: number
  numIdoTokens: anchor.BN
  poolUsdc: PublicKey
  poolWatermelon: PublicKey
  redeemableMint: PublicKey
  startIdoTs: anchor.BN
  watermelonMint: PublicKey
}

interface WalletStore extends State {
  connected: boolean
  connection: {
    cluster: string
    current: Connection
    websocket: Connection
    endpoint: string
    programId: PublicKey
  }
  current: WalletAdapter | undefined
  providerUrl: string
  provider: anchor.Provider | undefined
  program: anchor.Program | undefined
  pool: PoolAccount | undefined
  mangoVault: TokenAccount | undefined
  usdcVault: TokenAccount | undefined
  tokenAccounts: ProgramAccount<TokenAccount>[]
  mints: { [pubkey: string]: MintAccount }
  set: (x: any) => void
  actions: any
}

const useWalletStore = create<WalletStore>((set, get) => ({
  connected: false,
  connection: {
    cluster: CLUSTER,
    current: DEFAULT_CONNECTION,
    websocket: WEBSOCKET_CONNECTION,
    endpoint: ENDPOINT.url,
    programId: PROGRAM_ID,
  },
  current: null,
  providerUrl: null,
  provider: undefined,
  program: undefined,
  pool: undefined,
  mangoVault: undefined,
  usdcVault: undefined,
  tokenAccounts: [],
  mints: {},
  actions: {
    async fetchPool() {
      const connection = get().connection.current
      const wallet = get().current
      const programId = get().connection.programId

      console.log('fetchPool', connection, poolIdl)
      if (connection) {
        const provider = new anchor.Provider(
          connection,
          wallet,
          anchor.Provider.defaultOptions()
        )
        const program = new anchor.Program(poolIdl, programId, provider)
        const pool = (await program.account.poolAccount.fetch(
          POOL_PK
        )) as PoolAccount

        const [usdcVault, mangoVault] = await Promise.all([
          getTokenAccount(connection, pool.poolUsdc),
          getTokenAccount(connection, pool.poolWatermelon),
        ])

        console.log({ program, pool, usdcVault, mangoVault })

        set((state) => {
          state.provider = provider
          state.program = program
          state.pool = pool
          state.usdcVault = usdcVault.account
          state.mangoVault = mangoVault.account
        })
      }
    },
    async fetchWalletTokenAccounts() {
      const connection = get().connection.current
      const connected = get().connected
      const wallet = get().current
      const walletOwner = wallet?.publicKey
      const set = get().set

      if (connected && walletOwner) {
        const ownedTokenAccounts = await getOwnedTokenAccounts(
          connection,
          walletOwner
        )

        console.log('fetchWalletTokenAccounts', ownedTokenAccounts)

        set((state) => {
          state.tokenAccounts = ownedTokenAccounts
        })
      } else {
        set((state) => {
          state.tokenAccounts = []
        })
      }
    },
    async fetchUsdcVault() {
      const connection = get().connection.current
      const pool = get().pool
      const set = get().set

      if (!pool) return

      const { account: vault } = await getTokenAccount(
        connection,
        pool.poolUsdc
      )
      console.log('fetchUsdcVault', vault)

      set((state) => {
        state.usdcVault = vault
      })
    },
    async fetchMints() {
      const connection = get().connection.current
      const pool = get().pool
      const mangoVault = get().mangoVault
      const usdcVault = get().usdcVault
      const set = get().set

      const mintKeys = [mangoVault.mint, usdcVault.mint, pool.redeemableMint]
      const mints = await Promise.all(
        mintKeys.map((pk) => getMint(connection, pk))
      )
      console.log('fetchMints', mints)

      set((state) => {
        for (const pa of mints) {
          state.mints[pa.publicKey.toBase58()] = pa.account
          console.log('mint', pa.publicKey.toBase58(), pa.account)
        }
      })
    },
    async submitContribution(amount: number) {
      console.log('submitContribution', amount)

      const actions = get().actions
      await actions.fetchWalletTokenAccounts()

      const {
        program,
        provider,
        pool,
        tokenAccounts,
        mints,
        usdcVault,
        current: wallet,
        connection: { current: connection },
      } = get()
      const usdcDecimals = mints[usdcVault.mint.toBase58()].decimals
      const redeemable = findLargestBalanceAccountForMint(
        mints,
        tokenAccounts,
        pool.redeemableMint
      )
      const usdc = findLargestBalanceAccountForMint(
        mints,
        tokenAccounts,
        usdcVault.mint
      )

      const difference = amount - (redeemable?.balance || 0)
      const [poolSigner] = await anchor.web3.PublicKey.findProgramAddress(
        [pool.watermelonMint.toBuffer()],
        program.programId
      )

      if (difference > 0) {
        const depositAmount = new anchor.BN(
          difference * Math.pow(10, usdcDecimals)
        )
        console.log(depositAmount.toString(), 'exchangeUsdcForReemable')

        let redeemableAccPk = redeemable?.account?.publicKey
        const transaction = new Transaction()
        if (!redeemable) {
          const [ins, pk] = await createAssociatedTokenAccount(
            wallet.publicKey,
            wallet.publicKey,
            pool.redeemableMint
          )
          transaction.add(ins)
          redeemableAccPk = pk
        }
        transaction.add(
          program.instruction.exchangeUsdcForRedeemable(depositAmount, {
            accounts: {
              poolAccount: POOL_PK,
              poolSigner: poolSigner,
              redeemableMint: pool.redeemableMint,
              poolUsdc: pool.poolUsdc,
              userAuthority: provider.wallet.publicKey,
              userUsdc: usdc.account.publicKey,
              userRedeemable: redeemableAccPk,
              tokenProgram: TOKEN_PROGRAM_ID,
              clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
            },
          })
        )
        await sendTransaction({ transaction, wallet, connection })
      } else if (difference < 0) {
        const withdrawAmount = new anchor.BN(
          difference * -1 * Math.pow(10, usdcDecimals)
        )
        console.log(withdrawAmount.toString(), 'exchangeRedeemableForUsdc')
        await program.rpc.exchangeRedeemableForUsdc(withdrawAmount, {
          accounts: {
            poolAccount: POOL_PK,
            poolSigner: poolSigner,
            redeemableMint: pool.redeemableMint,
            poolUsdc: pool.poolUsdc,
            userAuthority: provider.wallet.publicKey,
            userUsdc: usdc.account.publicKey,
            userRedeemable: redeemable.account.publicKey,
            tokenProgram: TOKEN_PROGRAM_ID,
            clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
          },
        })
      } else {
        console.log('difference = 0 no submission needed', difference)
        return
      }

      await actions.fetchWalletTokenAccounts()
      actions.fetchUsdcVault()
    },
  },
  set: (fn) => set(produce(fn)),
}))

export default useWalletStore

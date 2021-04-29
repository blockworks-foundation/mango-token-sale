import create, { State } from 'zustand'
import produce from 'immer'
import { Connection } from '@solana/web3.js'

import { EndpointInfo, WalletAdapter } from '../@types/types'
import {
  getOwnedTokenAccounts,
  getMint,
  subscribeToTokenAccount,
  TokenAccount,
  MintAccount,
} from '../utils/tokens'

export const ENDPOINTS: EndpointInfo[] = [
  {
    name: 'mainnet-beta',
    url: 'https://api.mainnet-beta.solana.com/',
    websocket: 'https://api.mainnet-beta.solana.com/',
  },
  {
    name: 'devnet',
    url: 'https://devnet.solana.com',
    websocket: 'https://devnet.solana.com',
  },
]

const CLUSTER = 'mainnet-beta'
const ENDPOINT = ENDPOINTS.find((e) => e.name === CLUSTER)
const DEFAULT_CONNECTION = new Connection(ENDPOINT.url, 'recent')
const WEBSOCKET_CONNECTION = new Connection(ENDPOINT.websocket, 'recent')

interface WalletStore extends State {
  connected: boolean
  connection: {
    cluster: string
    current: Connection
    websocket: Connection
    endpoint: string
  }
  current: WalletAdapter | undefined
  providerUrl: string
  tokenAccounts: { [pubkey: string]: TokenAccount }
  mints: { [pubkey: string]: MintAccount }
  subscriptions: { [pubkey: string]: () => void }
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
  },
  current: null,
  providerUrl: null,
  tokenAccounts: {},
  mints: {},
  subscriptions: {},
  actions: {
    async fetchWalletTokenAccounts() {
      const connection = get().connection.current
      const connected = get().connected
      const subscriptions = get().subscriptions
      const wallet = get().current
      const walletOwner = wallet?.publicKey
      const set = get().set

      if (connected && walletOwner) {
        const ownedAccountsResult = await getOwnedTokenAccounts(
          connection,
          walletOwner
        )

        const newTokenAccounts: { [pubkey: string]: TokenAccount } = {}
        ownedAccountsResult.forEach((r) => {
          newTokenAccounts[r.publicKey.toBase58()] = r.account
        })

        // cancel all subscriptions
        Object.values(subscriptions).forEach((s) => s())

        set((state) => {
          state.subscriptions = {}
          state.tokenAccounts = newTokenAccounts
        })

        ownedAccountsResult.forEach((r) => {
          this.subscribeToTokenAccount(r.publicKey)
        })
      } else {
        set((state) => {
          state.tokenAccounts = {}
        })
      }
    },
    async fetchWalletMints() {
      const connection = get().connection.current
      const connected = get().connected
      const tokenAccounts = get().tokenAccounts
      const set = get().set

      if (connected) {
        const fetchMints = Object.values(tokenAccounts).map((a) =>
          getMint(connection, a.mint)
        )
        const mintResults = await Promise.all(fetchMints)

        const newMints: { [pubkey: string]: MintAccount } = {}
        mintResults.forEach(
          (r) => (newMints[r.publicKey.toBase58()] = r.account)
        )

        set((state) => {
          state.mints = newMints
        })
      } else {
        set((state) => {
          state.mints = {}
        })
      }
    },
    async subscribeToTokenAccount(pubkey) {
      const connection = get().connection.websocket
      const connected = get().connected
      const set = get().set

      if (connected) {
        const sub = subscribeToTokenAccount(connection, pubkey, (r) => {
          set((s) => {
            s.tokenAccounts[pubkey.toBase58()] = r.account
          })
        })

        set((s) => {
          s.subscriptions[pubkey.toBase58()] = sub
        })
      }
    },
  },
  set: (fn) => set(produce(fn)),
}))

export default useWalletStore

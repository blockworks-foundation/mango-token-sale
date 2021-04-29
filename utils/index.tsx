import BN from 'bn.js'
import useWalletStore from '../stores/useWalletStore'

function fixedPointToNumber(value: BN, decimals: number) {
  const divisor = new BN(10).pow(new BN(decimals))
  const quotient = value.div(divisor)
  const remainder = value.mod(divisor)
  return quotient.toNumber() + remainder.toNumber() / divisor.toNumber()
}

export function getUsdcBalance() {
  const { tokenAccounts, mints } = useWalletStore((state) => state)

  const calculateBalance = (a) => {
    const mint = mints[a.account?.mint?.toBase58()]
    return mint ? fixedPointToNumber(a.account.amount, mint.decimals) : 0
  }

  const usdcAddress = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'

  const usdcAccount = tokenAccounts.filter(
    (a) => a.account.mint.toBase58() === usdcAddress
  )

  const usdcBalance = usdcAccount.map((a) => calculateBalance(a))

  return usdcBalance.length ? usdcBalance[0] : 0
}
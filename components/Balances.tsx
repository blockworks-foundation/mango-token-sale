import BN from 'bn.js'

import useWalletStore from '../stores/useWalletStore'

const Balances = () => {
  const { tokenAccounts, mints } = useWalletStore((state) => state)

  function fixedPointToNumber(value: BN, decimals: number) {
    const divisor = new BN(10).pow(new BN(decimals))
    const quotient = value.div(divisor)
    const remainder = value.mod(divisor)
    return quotient.toNumber() + remainder.toNumber() / divisor.toNumber()
  }

  function calculateBalance(acc) {
    const mint = mints[acc.mint.toBase58()]
    return mint ? fixedPointToNumber(acc.amount, mint.decimals) : 0
  }

  const displayedBalances = Object.entries(tokenAccounts)
    .map(([id, acc]) => ({ id, balance: calculateBalance(acc) }))
    .sort((a, b) => (a.id > b.id ? 1 : -1))

  return (
    <ul>
      {displayedBalances.map((b) => (
        <li key={b.id}>
          {b.id}: {b.balance}
        </li>
      ))}
    </ul>
  )
}

export default Balances

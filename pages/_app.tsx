import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
import useWallet from '../hooks/useWallet'

function App({ Component, pageProps }) {
  useWallet()

  const title = 'Mango Markets'
  const description =
    'Mango Markets - Decentralised, cross-margin trading up to 5x leverage with lightning speed and near-zero fees powered by Serum.'
  const keywords =
    'Mango Markets, Serum, SRM, Serum DEX, DEFI, Decentralized Finance, Decentralised Finance, Crypto, ERC20, Ethereum, Decentralize, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SerumBTC, SerumUSD, SRM Tokens, SPL Tokens'

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/twitter-image.png" />
      </Head>
      <ThemeProvider defaultTheme="Light">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App

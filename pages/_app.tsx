import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/app.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <meta charset="utf-8" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#191B1D" />

        <meta name="description" content="Metal infused hard rock from Twente (NL). Currently working on new songs!" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <title>Roundabouts</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
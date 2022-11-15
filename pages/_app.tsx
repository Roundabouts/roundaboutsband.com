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
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="Metal infused hard rock from Twente (NL). Currently working on new songs!" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        
        <title>Roundabouts</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
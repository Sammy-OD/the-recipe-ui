import Head from 'next/head';
import Script from 'next/script';

const Layout = ({children}) => {
  return (
    <div>
      <Script data-ad-client="ca-pub-9572308981796894" async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
      </Script>
      <Head>
        <title>The Recipe</title>
        <meta name="description" content="An app built to help refurbish your cooking skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
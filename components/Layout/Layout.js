import Head from 'next/head';
import Script from 'next/script';

const Layout = ({children}) => {
  return (
    <div>
      <Script strategy={"afterInteractive"} src={`https://www.googletagmanager.com/gtag/js?id=G-NMNWWJS35X`}/>
      <Script id={"google-analytics"} strategy={"afterInteractive"} dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NMNWWJS35X', {page_path: window.location.pathname});
        `
      }}/>
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
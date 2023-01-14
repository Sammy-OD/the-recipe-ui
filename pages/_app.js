import '../styles/index.scss';

import Nav from '../components/Nav/Nav';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className='app-wrapper'>
        <Nav />
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

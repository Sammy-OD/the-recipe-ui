import '../styles/index.scss';

import Nav from '../components/Nav/Nav';

export default function App({ Component, pageProps }) {
  return (
    <div className='app-wrapper'>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

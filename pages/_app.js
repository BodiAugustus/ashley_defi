import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@styles/globals.css'

const NoOperation = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ?? NoOperation

  return (
    <Layout>
      <ToastContainer/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

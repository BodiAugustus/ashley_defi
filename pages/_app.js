import '@styles/globals.css'

const NoOperation = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ?? NoOperation

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

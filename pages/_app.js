// `pages/_app.js`
import '../styles/global.css';
import { useRouter } from 'next/router'
import PublisherLayout from '../layouts/publisherLayout';

const EmptyLayout = ({ children }) => <>{children}</>

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isAdmin = router.route.startsWith("/admin") 
  const isHome = router.route.startsWith("/home") 

  const Layout =  isAdmin || isHome ? PublisherLayout : EmptyLayout
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <title>Become a Creator - Brave Rewards | Creators</title>
     <body class="h-full bg-gray-100">
     <meta name="description" content="Viewers who use the Brave Browser may have contributed money to you while surfing the web through Brave Rewards. Simply sign up as a verified content creator on Brave Rewards to start collecting your contributions."/> 
      <Layout {...{isAdmin, isHome}} >{getLayout(<Component {...pageProps}/>)}</Layout>
    </body>
    </>
  )
}

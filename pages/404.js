import PublisherLayout from '@layouts/publisherLayout'
import Error from '@components/error'
import { useRouter } from 'next/router'

export default function NotFound({ code = 404, message = "Sorry, there's nothing here but lions... and excellence." }) {
    // FIXME: This should be done with a context
    const router = useRouter()
    const isAdmin = router.asPath.startsWith("/admin") 
    const isHome = router.asPath.startsWith("/home") 
    const Layout = isAdmin || isHome ? PublisherLayout : ({children}) => <>{children}</>

    return (
        <Layout>
          <Error {...{code, message}}/>
        </Layout>
    )
}

import PublisherLayout from '../layouts/publisherLayout'
import { useRouter } from 'next/router'


export default function Error({ code = 404, message = "Sorry, there's nothing here but lions... and excellence." }) {
    // FIXME: This should be done with a context
    const router = useRouter()
    const isAdmin = router.asPath.startsWith("/admin") 
    const isHome = router.asPath.startsWith("/home") 
  
    const brave_icon_url = "https://imgs.search.brave.com/Liz-4vF39caaq9CmJ4g-3JGUHJ-GBOmQL_E_rEqt7-w/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jcnlw/dG9yYWRhci5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDgvQnJhdmUtbG9n/by5wbmc"
    const Layout = isAdmin || isHome ? PublisherLayout : ({children}) => <>{children}</>
    return (
        <Layout>
            <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <img
                        className="lg:block"
                        src={brave_icon_url}
                        alt="Workflow"
                    />
                </div>
                <div className="text-6xl font-extrabold">{code}</div>
                <div className="text-xl font-normal mt-6">{message}</div>
            </div>
        </Layout>
    )
}
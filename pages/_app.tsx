// `pages/_app.js`
import 'styles/global.css';
import { AppProps } from 'node_modules/next/app';
import Head from 'next/head';
import { useUser, useRouteContext } from 'hooks';
import { AppLayout } from 'layouts';
import { AppContext } from 'context';

const EmptyLayout = ({ children }: { children: React.ReactElement }) => <>{children}</>

export default function App({ Component, pageProps }: AppProps) {
  const { user, setUser, isLoadingUser } = useUser()
  const { isHome, isHomeContext, isAdminContext } = useRouteContext()

  const appContext = {
    user,
    setUser,
    isHome,
    isHomeContext,
    isAdminContext,
  };

  const PrimaryLayout = isHomeContext ? AppLayout : EmptyLayout

  return (
    <>
      <Head>
        <title>Become a Creator - Brave Rewards | Creators</title>
        <meta name="description" content="Viewers who use the Brave Browser may have contributed money to you while surfing the web through Brave Rewards. Simply sign up as a verified content creator on Brave Rewards to start collecting your contributions." />
      </Head>
      {!isLoadingUser && (
        <AppContext.Provider value={appContext}>
          <PrimaryLayout {...{ appContext }} ><Component {...pageProps} /></PrimaryLayout>
        </AppContext.Provider>)}
    </>
  )
}

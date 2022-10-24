// `pages/_app.js`
import '@styles/global.css';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import AppLayout from '@layouts/publisherLayout';
import AppContext from 'appContext';

const EmptyLayout = ({ children }) => <>{children}</>

export default function App({ Component, pageProps }) {
  const { route } = useRouter()

  const isHome = route === "/home"
  const isHomeContext = route.startsWith("/home")
  const isAdminContext = route.startsWith("/admin")

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    // TODO: Going to need to think hard about data modeling here soon
    const channels = []
    const banner = false
    const custodian = false

    const user = {
      first_name: "Demo",
      last_name: "User",
      email: "demo@user.com",
      channels,
      banner,
      custodian
    }

    setUser(user)
    setLoading(false);
  };

  useEffect(() => fetchData(), []);

  const appContext = {
    user,
    setUser,
    loading,
    setLoading,
    isHome,
    isHomeContext,
    isAdminContext,
  };

  const PrimaryLayout = isHomeContext ? AppLayout : EmptyLayout

  return (
    <>
      {!loading && (
        <AppContext.Provider value={appContext}>
          <PrimaryLayout {...{ appContext }} ><Component {...pageProps} /></PrimaryLayout>
        </AppContext.Provider>)}
    </>
  )
}

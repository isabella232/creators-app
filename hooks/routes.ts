import { useRouter } from 'next/router'

interface HookOutput {
    isHome: boolean,
    isHomeContext: boolean
    isAdminContext: boolean
}

export default function useRouteContext(): HookOutput { 
    const { route } = useRouter()

    const isHome = route === "/home"
    const isHomeContext = route.startsWith("/home")
    const isAdminContext = route.startsWith("/admin")

    return {isHome, isHomeContext, isAdminContext}
}
import { useRouter } from "next/router"

export const usePathTitle = () => { 
  const router = useRouter()
  const title = router.pathname.split("/").slice(1).join(" | ")
  return title
}

export default function HeaderLayout({ children }) {
  const title = usePathTitle()

  return (
    <div >
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl tracking-wide text-gray-600 capitalize">{title}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mt-0">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

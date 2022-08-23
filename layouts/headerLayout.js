import { useRouter } from "next/router"

export default function HeaderLayout({ children }) {
  const router = useRouter()
  const title = router.pathname.split("/").slice(1).join(" | ")
  
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl tracking-tight text-gray-600 capitalize px">{title}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}

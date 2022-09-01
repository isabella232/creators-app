import { useRouter } from "next/router"
import { ChevronRightIcon } from "@heroicons/react/outline"

export default function HeaderLayout({ children }) {
  const router = useRouter()
  const paths = router.pathname.split("/").slice(1)

  return (
    <div >
      <header className="bg-white shadow">
        <div className="max-w-7xl py-3 px-4 sm:px-6 lg:px-8 mx-auto flex items-center">
          {paths.map(path =>
            <>
              <ChevronRightIcon className="h-4 m-3"/>
              <div className="text-lg tracking-wide text-gray-600 capitalize">{path}</div>
        
            </>
          )}
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

const navigation = [
  { name: 'Log in', href: '/login' },
  { name: 'Sign Up', href: '/login' },
]

export default function Landing() {
  const brave_icon_url = "https://imgs.search.brave.com/Liz-4vF39caaq9CmJ4g-3JGUHJ-GBOmQL_E_rEqt7-w/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jcnlw/dG9yYWRhci5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDgvQnJhdmUtbG9n/by5wbmc"

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <img
            alt="Brave"
            className="w-auto h-72"
            src={brave_icon_url}
          />
          <main className="lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">

                <span className="block xl:inline">Earn more for content </span>{' '}
                <span className="block text-orange-600 xl:inline">you publish to the web</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Your viewers who use the Brave Browser may have contributed money to you while surfing the web through Brave Rewards.
                Simply sign up as a verified content creator on Brave Rewards to start collecting your contributions.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 hover:bg-purple-900 md:py-4 md:text-lg md:px-10"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Log In
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  )
}


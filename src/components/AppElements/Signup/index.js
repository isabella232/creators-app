// This is just a generic placeholder built from tailwindui examples

import { LockClosedIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'


export default function Signup() {
  const router = useRouter()

  const brave_icon_url = "https://imgs.search.brave.com/Liz-4vF39caaq9CmJ4g-3JGUHJ-GBOmQL_E_rEqt7-w/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jcnlw/dG9yYWRhci5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDgvQnJhdmUtbG9n/by5wbmc"

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <img
            className="lg:block"
            src={brave_icon_url}
            alt="Workflow"
          />


          <div>
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Enter your email to sign in.
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="/home" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"

                className="group relative w-full flex justify-center py-2 px-4 btn-primary"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-purple-500 group-hover:text-purple-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


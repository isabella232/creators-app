import { Disclosure } from '@headlessui/react'
import HeaderLayout from '../../layouts/headerLayout'

export default function Home() {
  return (
    <div className="px-4 py-6 sm:px-0">
        <div className="w-full px-4 pt-16">
          <div className="mx-auto max-w-md rounded-2xl bg-white p-6">
            <Disclosure defaultOpen={true}>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your entire
                team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
      </div>
    </div>
  )
}

Home.getLayout = (page) => <HeaderLayout title="Home">{page}</HeaderLayout>


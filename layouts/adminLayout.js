import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import HeaderLayout from './headerLayout'
import React from 'react'
import { useRouter } from 'next/router'

const ExpansionButton = ({ title = "Title", children, onClick }) => {
    return (
        <div className="mx-auto w-full tracking-widest">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button onClick={onClick} className="shadow shadow-slate-500 flex w-full justify-between px-4 py-2 font-medium text-white hover:bg-slate-600 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                            <span className='text-lg'>{title}</span>
                            {children && <ChevronUpIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-white`}
                            />}

                        </Disclosure.Button>
                        {children && <Disclosure.Panel className="text-sm bg-slate-800 text-slate-300">
                            <div className='flex flex-col'>
                                {React.Children.map(children, (child) => <div className='shadow shadow-slate-300 hover:text-white hover:bg-slate-900'><div className='px-5 m-3'>{React.cloneElement(child)}</div></div>)}
                            </div>
                        </Disclosure.Panel>}
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default function AdminLayout({ children }) {
    const router = useRouter()
    return (
        <div>
            <div className=' bg-slate-700'>
                <div className='flex'>
                    <ExpansionButton title="Publishers" onClick={() => router.push('/admin/publishers')} />
                    <ExpansionButton title="Channels" onClick={ () => router.push('/admin/channels')}/>
                    <ExpansionButton title="Referrals" onClick={ () => router.push('/admin/referrals')} />
                    <ExpansionButton title="Payouts" onClick={ () => router.push('/admin/payouts')}/>
                </div>
            </div>
            <div>
                <HeaderLayout>{children}</HeaderLayout>
            </div>
        </div>
    )
}
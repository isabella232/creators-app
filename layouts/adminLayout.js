import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import HeaderLayout from './headerLayout'
import Link from 'next/link'
import React from 'react'

const ExpansionButton = ({ title = "Title", children, onClick }) => {
    return (
        <div className="mx-auto w-full tracking-widest">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button onClick className="shadow shadow-slate-500 flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='pr-10 text-lg'>{title}</span>
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
    return (
        <div className='md:grid md:grid-cols-4'>
            <div className=' bg-slate-700 md:h-screen h-min'>
                <div>
                    <ExpansionButton title="Publishers">
                        <Link href='/admin/publishers'>All Publishers</Link>
                        <Link href='/admin/publishers'>Suspended Publishers</Link>
                        <Link href='/admin/publishers'>2FA Removals</Link>
                    </ExpansionButton>
                    <ExpansionButton title="Publishers Stats" />
                    <ExpansionButton title="Visitor Stats" />
                    <ExpansionButton title="Top Publisher Contributions">
                        <Link href='/admin/publishers'>All Publishers</Link>
                        <Link href='/admin/publishers'>Suspended Publishers</Link>
                        <Link href='/admin/publishers'>2FA Removals</Link>
                    </ExpansionButton>
                    <ExpansionButton title="Top Publisher Referrals">
                        <Link href='/admin/publishers'>All Publishers</Link>
                        <Link href='/admin/publishers'>Suspended Publishers</Link>
                        <Link href='/admin/publishers'>2FA Removals</Link>
                    </ExpansionButton>
                    <ExpansionButton title="Top Balances">
                        <Link href='/admin/publishers'>All Publishers</Link>
                        <Link href='/admin/publishers'>Suspended Publishers</Link>
                        <Link href='/admin/publishers'>2FA Removals</Link>
                    </ExpansionButton>
                    <ExpansionButton title="Top YouTube Channels">
                        <Link href='/admin/publishers'>All Publishers</Link>
                        <Link href='/admin/publishers'>Suspended Publishers</Link>
                        <Link href='/admin/publishers'>2FA Removals</Link>
                    </ExpansionButton>
                    <ExpansionButton title="FAQS">
                        <Link href='/admin/publishers'>All Publishers</Link>
                        <Link href='/admin/publishers'>Suspended Publishers</Link>
                        <Link href='/admin/publishers'>2FA Removals</Link>
                    </ExpansionButton>
                </div>
            </div>
            <div className='col-span-3'>
                <HeaderLayout><div>Some content</div></HeaderLayout>
            </div>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link"
import { Divider } from "components/PageElements";
import brave_logo from 'public/images/PublisherMediaAssets/Logos/Brave/PNG/primary/logo/brave-lion.png'

const BraveLogoSmall = () => {
    return (
        <div className="w-6 h-6"><Image src={brave_logo} /></div>
    )
}
const BraveLogo = () => {
    return (
        <div className="flex items-center">
            <div className="mr-3"><BraveLogoSmall /></div>
            <h1 className="text-text-large text-text-primary font-extrabold mt-1">Brave Creators</h1>
        </div>
    )
}

const SideNav = ({ appContext }) => {
    const { user, setUser, isHome } = appContext
    const { channels, banner, custodian } = user;

    // Just for clarification I am not advocating this be the way we handle things,
    // this is for development UI purposes only and should be removed/replaced by something
    // more effective.

    const toggleChannels = () => {
        console.log({ channels })
        if (channels && !channels.length) {
            setUser({ ...user, channels: [1, 2, 3, 4] })
        } else if (channels && !!channels.length) {
            setUser({ ...user, channels: [] })
        }
    }

    const toggleBanner = () => {
        if (!banner) {
            setUser({ ...user, banner: true })
        } else {
            setUser({ ...user, banner: false })
        }
    }

    const toggleAccountServices = () => {
        if (!custodian) {
            setUser({ ...user, custodian: true })
        } else {
            setUser({ ...user, custodian: false })
        }
    }

    const isInitialState = !custodian && !banner && (!channels || !!channels && !channels.length)

    const toggleInitialState = () => {
        if (!isInitialState) {
            setUser({ ...user, custodian: false, banner: false, channels: [] })
        } else {
            setUser({ ...user, custodian: true, banner: true, channels: [1, 2, 3, 4] })

        }
    }

    return (
        <div className='bg-container-background shadow-03 lg:min-w-[250px] lg:w-[250px] hidden lg:flex lg:flex-col'>
            <div className="m-4">
                <BraveLogo />
            </div>
            <div className="mt-4 lg:ml-8 lg:mt-8">
                <div>
                    <ul className="space-y-4 text-text-secondary">
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/home/feed">Feed</Link></li>
                        <li><Link href="/home/explore">Explore</Link></li>
                        <li><Link href="/home/notifications">Notifications</Link></li>
                        <li><Link href="/home/creator-tools">Creator tools</Link></li>
                        <li>Settings</li>
                        <li className="ml-4"><Link href='/home/profile'>Profile</Link></li>
                        <li className="ml-4"><Link href='/home/account'>Account</Link></li>
                    </ul>
                </div>
            </div>
            <Divider />
            {!!isHome && (
                <ul className="m-8 space-y-4  text-text-secondary flex justify-start flex-col">
                    <li className="pt-8">Development</li>
                    <li className="ml-2"><button onClick={toggleChannels}>Toggle Channels</button></li>
                    <li className="ml-2"><button onClick={toggleBanner}>Toggle Banner</button></li>
                    <li className="ml-2"><button onClick={toggleAccountServices}>Toggle Account Services</button></li>
                    <li className="ml-2"><button onClick={toggleInitialState}>Toggle initial state</button></li>

                </ul>
            )}
        </div>
    )
}

const MobileHeader = () => {
    return (
        <div className="flex flex-row lg:hidden items-center justify-between h-14 bg-container-background">
            <div className="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>

            <BraveLogo />

            <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export default function Applayout({ appContext = {}, children }) {


    return (
        <html data-theme="light">
            <head>
                <title>Become a Creator - Brave Rewards | Creators</title>
                <meta name="description" content="Viewers who use the Brave Browser may have contributed money to you while surfing the web through Brave Rewards. Simply sign up as a verified content creator on Brave Rewards to start collecting your contributions." />
            </head>
            <body className="bg-page-background">
                <MobileHeader />
                <div className="flex flex-col lg:flex-row justify-between">
                    <SideNav appContext={appContext} />
                    <main className="mb-8 lg:m-8 space-y-8 max-w-7xl min-h-screen w-full">
                        {children}
                    </main>
                    <div/>
                </div>
                <div />
                <footer className='min-w-full bg-black pl-10 pr-6 pt-10 pb-10'>
                    <div className="flex text-white"><BraveLogoSmall /><span className="ml-2">brave</span></div>
                    <div className='text-text-secondary flex flex-col items-end'>
                        <div className="text-text-small">Terms of use / Report a security issue</div>
                        <div className='text-text-x-small'>2015 - 2022 Brave Software, Inc | All Rights Reserved</div>
                    </div>
                </footer>
            </body>
        </html >
    )
}

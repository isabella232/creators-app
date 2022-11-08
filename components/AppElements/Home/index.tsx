import Channels from "./Channels";
import Banner from "./Banner";
import AccountServices from "./AccountServices";
import Insights from "./Insights";
import { User } from 'schema';


export default function Home({ user }: { user: User }) {
    const { channels, banner, custodian } = user
    
    return (
        <>
            <AccountServices {...{ custodian }} />
            <Insights />
            <Banner {...{ banner }} />
            <Channels {...{ channels }} />
        </>
    )
}

import Channels from "./Channels";
import Banner from "./Banner";
import AccountServices from "./AccountServices";
import Insights from "./Insights";

export default function Home({ user = {} }) {
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

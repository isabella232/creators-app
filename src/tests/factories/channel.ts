import { Channel } from "types"

const channelFactory = (channel?: Partial<Channel>): Channel => {
    return { channel_identifier: "oauthbringer#twitter.somethingsomething"}
}

export default channelFactory
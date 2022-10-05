import { Twitter } from '@components/Social/icon'
import { Divider } from "@components/PageElements"

export const TwitterCard = (props) => {
    return (
        <ChannelCard {...props} icon={<Twitter/>} />
    )
}

export default function ChannelCard({ icon, name = "Twitter", username = "oauthbringer", earnings }) {
    return (
        <div className="rounded-8 border border-light-divider-subtle bg-container-background max-w-[200px] md:max-w-[300px]">
            <div>
                <div className="mx-4 mt-4 space-y-2">
                    <div className="flex items-center space-x-2">
                        {icon}
                        <div className='font-normal text-text-small'>{name}</div>
                    </div>
                    <h4>{username}</h4>
                    <div>
                        <div className='text-text-small text-text-secondary'>Previous Period Earnings</div>
                        <h3>{earnings ? earnings : "- - "}<span className='text-text-disabled font-normal' >BAT</span></h3>
                    </div>
                </div>
                <Divider className="my-0 mt-4" />
                <div>
                    <div className="flex">
                        <button className='text-text-interactive font-semibold w-[49.5%] m-2'>Edit</button>
                        <Divider className="my-0" />
                        <button className="font-semibold text-text-secondary w-[49.5%] m-2">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
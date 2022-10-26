import { TwitterIcon } from 'components/BrandElements'
import { Divider } from "components/PageElements"

export const TwitterCard = (props) => {
    return (
        <ChannelCard {...props} icon={<TwitterIcon />} />
    )
}

export default function ChannelCard({ icon, name = "Twitter", username = "oauthbringer", earnings }) {
    return (
        <div className="rounded-8 border border-light-divider-subtle bg-container-background">
            <div>
                <div className="mx-4 mt-4 space-y-8">
                    <div className='flex flex-row justify-between sm:flex-col sm:items-start'>
                        <div className="flex flex-row items-center space-x-2">
                            {icon}
                            <div className='font-normal text-text-small'>{name}</div>
                        </div>
                        <h4>{username}</h4>
                    </div>
                    <div className='flex flex-row justify-between items-center sm:flex-col sm:items-start'>
                        <div className='text-text-small text-text-secondary'>Previous Period Earnings</div>
                        <h3>{earnings ? earnings : "- - "}<span className='text-text-disabled font-normal' >BAT</span></h3>
                    </div>
                </div>
                <Divider className="my-0 mt-4" />
                <div>
                    <div className="flex">
                        <div className='m-2 w-[50%] flex flex-col'>
                            <button className='text-text-interactive font-semibold m-2'>Edit</button>
                        </div>
                        <Divider className="my-0" />
                        <div className='m-2 w-[50%] flex flex-col'>
                            <button className="font-semibold text-text-secondary m-2">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
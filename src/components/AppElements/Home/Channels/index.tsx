import ChannelCard, { TwitterCard } from "./card"
export { ChannelCard, TwitterCard }
import { Channel } from "types"
import { Card, Section } from "components/PageElements"

export interface ComponentProps { 
    channels: Channel[]
}

export default function Channels({ channels }: ComponentProps) {
    return (
        <Card heading="Channels">
            <section id="channelsConfiguredContainer" className="rounded-16 bg-container-background space-y-4">
                <div className="flex justify-between">

                </div>
                <p className="text-text-secondary max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis massa non dolor sodales, eu ullamcorper lectus mattis. Nulla eu pellentesque turpis, eget congue est. Etiam ultricies rutrum odio, vel.
                </p>
                {!!channels.length && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {channels.slice(0, 10).map((channel, i) => <div key={i}><TwitterCard /></div>)}
                </div>}
                {!channels.length && <div className='rounded-16 border border-gray-20 flex flex-col items-center p-8 space-y-4'>
                    <div className="h-40 bg-gray-20 w-40"></div>
                    <h4 className="text-text-secondary font-medium text-text-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    <p className='text-text-small font-normal text-text-secondary'>Duis iaculis massa non dolor sodales, eu ullamcorper lectus mattis. Nulla eu pellentesque turpis, eget congue est. Etiam ultricies rutrum odio, vel.</p>
                    <button className="btn-secondary">+ Add your first channel</button>
                </div>}
            </section>
        </Card>
    )
}

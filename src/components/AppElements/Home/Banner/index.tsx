import { Card, Section } from "components/PageElements"
import { Banner as BannnerType } from "types"

export interface ComponentProps { 
    banner?: BannnerType
}

export default function Banner({ banner }: ComponentProps) {

    const buttonProps = { className: `${banner ? "btn-secondary" : "btn-primary"} w-[83%] md:w-fit mt-8 md:mt-0` }

    return (
        <Card header="">
            <Section header="" className="flex justify-between items-center flex-col md:flex-row md:space-y-0 min-w-full">
                <div className="flex gap-12">
                    <div className='bg-blue-10 rounded-full h-28 w-60 p-8'></div>
                    <div>
                        <h3 className='text-h3 text-text-primary font-semibold pb-6'>Landing page and banner</h3>
                        <p className="text-text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis massa non dolor sodales, eu ullamcorper lectus mattis. Nulla eu pellentesque turpis, eget congue est. Etiam ultricies rutrum odio, vel.
                        </p>
                    </div>
                </div>
                <button {...buttonProps} >Customize</button>
            </Section>
        </Card>
    )
}

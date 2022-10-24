import { Card, Section } from "@pageElements"

export default function Banner({ banner }) {

    return (
        <>
            {!banner && (<Card header="">
                <Section header="" className="flex justify-between items-center">
                    <div className="flex gap-12">
                        <div className='bg-blue-10 rounded-full h-28 w-60 p-8'></div>
                        <div>
                            <h3 className='text-h3 text-text-primary font-semibold pb-6'>Landing page and banner</h3>
                            <p className="text-text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis massa non dolor sodales, eu ullamcorper lectus mattis. Nulla eu pellentesque turpis, eget congue est. Etiam ultricies rutrum odio, vel.
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn-primary">Customize</button>
                    </div>
                </Section>
            </Card>)}
            {banner && (<Card header="">
                <Section header="" className="flex justify-between items-center">
                    <div className="flex gap-12">
                        <div className='bg-blue-10 rounded-full h-28 w-60 p-8'></div>
                        <div>
                            <h3 className='text-h3 text-text-primary font-semibold pb-6'>Landing page and banner</h3>
                            <p className="text-text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis massa non dolor sodales, eu ullamcorper lectus mattis. Nulla eu pellentesque turpis, eget congue est. Etiam ultricies rutrum odio, vel.
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn-secondary">Customize</button>
                    </div>
                </Section>
            </Card>)}
        </>
    )
}

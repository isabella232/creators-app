import { Card, Section } from "@components/PageElements"
import { useAppContext } from "@components/AppContext"

export default function AccountServices() {
    const { user: { custodian } } = useAppContext()
    const constantProps = { header: "Account services" }

    return (
        <>
            {!!custodian && (<Card {...constantProps} className='bg-gradient-to-r from-logos-bat-1/15 to-logos-bat-3/15 via-logos-bat-2/24'>
                <div className="md:grid md:grid-cols-12 md:gap-8 sm:flex flex-col sm:gap-4">
                    <div className="md:col-span-4">
                        <div className='bg-container-background rounded-16 p-4'>
                            <p className="text-text-secondary text-text-default font-normal">Lorem Ipsum</p>
                            <div className="columns-2 py-4">
                                <p className='font-semibold text-text-primary'>Quisque</p>
                                <button className='text-systemfeedback-error font-semibold'>Lorem</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-container-background rounded-16 md:col-span-8 p-4'>
                        <p className="text-text-secondary text-text-default font-normal">Lorem Ipsum</p>
                        <div className="columns-4">
                            <div className="col-span-1">
                                <p className="text-text-primary text-text-default font-extralight py-4 wrap">sit amet, consectetur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>)}
            {!custodian && <Card {...constantProps}>
                <Section header="">
                    <div className="md:col-span-8">
                        <p className='text-h5 text-text-primary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque, leo vitae interdum vehicula, felis quam hendrerit justo, non auctor magna libero nec arcu. Aenean imperdiet tortor enim. Ut commodo, odio at ornare molestie, erat eros tempor justo, eget faucibus nibh dui lacinia tellus. Nunc non cursus nibh, consectetur dignissim magna. Proin nulla nibh, ultrices eget sollicitudin sed, auctor id erat. Pellentesque dictum odio a risus malesuada tempor. Nulla facilisi. Praesent euismod nibh ut sapien fringilla gravida. Donec enim dui, rhoncus et vestibulum non, auctor sed sem. Ut ut nisi eu lacus pretium suscipit ut eget turpis. Proin luctus dui massa, sit amet sagittis lacus tincidunt vel.
                        </p>
                        <p className="mt-2 text-text-secondary text-text-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper ante ligula, vitae fermentum neque commodo et. Etiam egestas lectus.
                        </p>
                    </div>
                    <div className='bg-gradient-to-br from-pink-40/10 to-purple-40/10 via-container-background rounded-16 md:ml-8 shadow-03 p-8 md:col-span-4 sm:mt-6'>
                        <div className='space-y-2 '>
                            <p className="text-text-secondary uppercase">Lorem Ipsum</p>
                            <div className="gap-2 flex flex-row flex-wrap">
                                <button className="btn-primary flex">Gemini</button>
                                <button className="btn-primary flex">Uphold</button>
                            </div>
                            <p className='text-text-interactive font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Section>
            </Card>}
        </>
    )
}

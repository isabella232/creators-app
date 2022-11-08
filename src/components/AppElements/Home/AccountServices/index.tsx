import { Card, Section } from "components/PageElements"
import { Custodian } from "schema"

export default function AccountServices({ custodian }: {custodian: Custodian | undefined}) {
    const constantProps = { heading: "Account services" }

    return (
        <>
            {!!custodian && (<Card {...constantProps} className='bg-gradient-to-r from-logos-bat-1/15 to-logos-bat-3/15 via-logos-bat-2/24'>
                <div className="md:grid md:grid-cols-12 gap-4 md:gap-8 flex flex-col">
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
                <Section header="" className="md:flex md:flex-row space-y-4 md:space-y-0 gap-4">
                    <div className='lg:max-w-[66%] lg:mr-8'>
                        <p className='text-h5 text-text-primary text-justify-responsive'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque, leo vitae interdum vehicula, felis quam hendrerit justo, non auctor magna libero nec arcu. Aenean imperdiet tortor enim. Ut commodo, odio at ornare molestie, erat eros tempor justo, eget faucibus nibh dui lacinia tellus. Nunc non cursus nibh, consectetur dignissim magna. Proin nulla nibh, ultrices eget sollicitudin sed, auctor id erat. Pellentesque dictum odio a risus malesuada tempor. Nulla facilisi. Praesent euismod nibh ut sapien fringilla gravida. Donec enim dui, rhoncus et vestibulum non, auctor sed sem. Ut ut nisi eu lacus pretium suscipit ut eget turpis. Proin luctus dui massa, sit amet sagittis lacus tincidunt vel.
                        </p>
                        <p className="mt-2 text-text-secondary text-text-default text-justify-responsive">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper ante ligula, vitae fermentum neque commodo et. Etiam egestas lectus.
                        </p>
                    </div>
                    <div className='bg-gradient-to-br from-pink-40/10 to-purple-40/10 via-container-background rounded-16 flex flex-col justify-center'>
                        <div className="p-8 lg:p-0 lg:m-8 space-y-4">
                            <div> <p className="text-text-secondary uppercase">Lorem Ipsum</p></div>
                            <div className="space-y-2 md:space-y-0 md:flex gap-2">
                                <button className="btn-primary flex min-w-full md:min-w-fit">Gemini</button>
                                <button className="btn-primary flex min-w-full md:min-w-fit">Uphold</button>
                            </div>
                            <p className='text-text-interactive font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Section>
            </Card>}
        </>
    )
}

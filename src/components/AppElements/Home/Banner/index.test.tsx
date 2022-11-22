import { render, screen } from '@testing-library/react'
import Component, { ComponentProps } from './index'
import { bannerFactory } from 'tests/factories'

const banner = bannerFactory()

const stateTest = (context: string = "", props: ComponentProps = {}, className: string = "btn-primary") => {
    describe(Component.name, () => {

        it(context, () => {
            const { container } = render(<Component {...props} />)

            const heading = screen.getByRole('button', {
                "name": "Customize",
            })

            expect(heading).toBeTruthy()
            expect(heading.className).toEqual(
                expect.stringContaining(className)
            )
        })
    })
}

stateTest("should show primary button when unconfigured")
stateTest("should show secondary button when configured", { banner }, "btn-secondary")
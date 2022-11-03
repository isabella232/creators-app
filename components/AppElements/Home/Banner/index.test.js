import { render, screen } from '@testing-library/react'
import Component from './index'


const stateTest = ({ context = "", props = { banner: false } , className = "btn-primary"} = {}) => {
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
stateTest({ context: "should show secondary button when configured", props: { banner: true }, className: "btn-secondary" })
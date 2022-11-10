import { render, screen } from '@testing-library/react'
import Component from './index'


const stateTest = ({ context = "", role="button", name="+ Add your first channel", props = { channels: [] } , className = "btn-secondary"} = {}) => {
    describe(Component.name, () => {

        it(context, () => {
            const { container } = render(<Component {...props} />)

            const heading = screen.getByRole(role, {
                "name": name,
            })

            expect(heading).toBeTruthy()
            expect(heading.className).toEqual(
                expect.stringContaining(className)
            )
        })
    })
}

stateTest("should show secondary button when initial state/no channels")

// FIXME: move this to typescript
stateTest({ context: "should show secondary button when configured", name: "Remove", props: { channels: [{invalid: true}]  }, className: "font-semibold text-text-secondary m-2" })
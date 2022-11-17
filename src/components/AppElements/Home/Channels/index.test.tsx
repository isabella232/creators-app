import { render, screen } from '@testing-library/react'
import Component, { ComponentProps } from './index'

// TODO: Make this a generic function if I can.  I ran into issues with the Component.name typing.
const stateTest = (context: string = "", role = "button", name = "+ Add your first channel", props: ComponentProps = { channels: [] }, className = "btn-secondary") => {
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
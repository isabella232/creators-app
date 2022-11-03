import { render, screen } from '@testing-library/react'
import Component from './index'

describe(Component.name, () => {
    it('render', () => {
        const { container } = render(<Component />)

        const heading = screen.getByRole('heading', {
            "name": "Account Settings",
        })

        expect(heading).toBeTruthy()
    })
})
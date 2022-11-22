import { render, screen } from '@testing-library/react'
import Component from './index'
import { userFactory } from 'tests/factories'

describe(Component.name, () => {
    it('render', () => {
        const user = userFactory({channels: []})
        render(<Component {...{ user }} />)

        const heading = screen.getByRole('heading', {
            "name": "Account services",
        })

        expect(heading).toBeTruthy()
    })
})
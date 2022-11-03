import { render, screen } from '@testing-library/react'
import Component from './index'

describe(Component.name, () => {
    it('render', () => {
        const { container } = render(<Component />)

        const heading = screen.getByRole('name', {
            name: /welcome to next\.js!/i,
        })

        //console.log({ heading})

        //expect(heading).toBeInTheDocument()
        //qexpect(container).toMatchSnapshot()
    })
})
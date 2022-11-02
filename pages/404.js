import Error from 'components/error'

export default function NotFound({ code = 404, message = "Sorry, there's nothing here but lions... and excellence." }) {
    return (<Error {...{code, message}}/>)
}

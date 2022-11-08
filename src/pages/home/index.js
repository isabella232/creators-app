import { Home } from "components/AppElements"
import { useAppContext } from "context"

export default () => {
  const { user } = useAppContext()
  return <Home {...{ user }} />
}

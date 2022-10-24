import Home from "@components/AppElements/Home"
import { useAppContext } from "appContext"


export default function Index() {
  const { user } = useAppContext()

  return <Home {...{ user }} />
}

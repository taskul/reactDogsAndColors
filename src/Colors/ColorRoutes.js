import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Colors from "../Colors/Colors"
import NotFound from "../NotFound"

const ColorRoutes = () => {

    return (
        <Switch>
            <Route path='/colors'>
            <Colors />
            </Route>
            <Redirect to='/colors' />
            <Route><NotFound /></Route>
      </Switch>
    )
}

export default ColorRoutes;
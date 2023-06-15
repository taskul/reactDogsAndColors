import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import DogList from "./DogList"
import DogDetails from "./DogDetails"
import NotFound from "../NotFound"

const Routes = ({dogs}) => {

    return (
        <Switch>
        <Route exact path='/dogs'>
          <DogList dogs={dogs} />
        </Route>
        <Route path='/dogs/:name'>
          <DogDetails dogInfo={dogs} />
        </Route>
        <Redirect to='/dogs' />
        <Route><NotFound /></Route>
      </Switch>
    )
}

export default Routes;
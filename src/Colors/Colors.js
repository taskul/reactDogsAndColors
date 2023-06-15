import "./Colors.css"
import NewColorForm from "./NewColorForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Color from "./Color";
import { Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import useLocalStorage from "../hooks/useLocalStorage";

const Colors = () => {
    const INITIAL_COLORS = [
        { color: "E1AEFF" },
        { color: "0079FF" },
        { color: "47A992" }
    ]

    const [colors, setColors] = useLocalStorage('colors', INITIAL_COLORS)
    const history = useHistory()

    const addColor = (colorHEX) => {
        setColors(colors => ([
            { color: colorHEX.color },
            ...colors
        ]))
    }

    const showForm = () => {
        history.push('/colors/new')
    }

    const showColorDetails = (color) => {
        history.push(`/colors/${color}`)
    }


    return (
        <div className="Colors">
            <button onClick={showForm} className="Colors-add-btn">Add Color</button>
            <Switch>
                <Route exact path='/colors/new'>
                    <NewColorForm addColor={addColor} />
                </Route>
                <Route path='/colors/:color'>
                    <Color />
                </Route>
                <Redirect to='/colors' />
            </Switch>
            <div className="Colors-samples">
                {colors.map(({ color }) => (
                    <div
                        className="Color-sample"
                        style={{ backgroundColor: `#${color}` }}
                        onClick={() => showColorDetails(color)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Colors;
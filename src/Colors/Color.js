import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import "./Color.css"

const Color = () => {
    const { color } = useParams();

    const goBack = () => {
        window.history.back()
    }

    return (
        <div
            className="Color-bg"
            style={{ backgroundColor: `#${color}` }}>
            <button onClick={goBack} className="Color-back-btn">Back</button>
            <div className="Color-display" style={{ backgroundColor: `#${color}` }}>
                <h1>#{color}</h1>
            </div>
        </div>
    )
}

export default Color;
import { useState } from "react"
import "./NewColorForm.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NewColorForm = ({ addColor }) => {
    const INITIAL_DATA = {
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_DATA);
    const history = useHistory()

    const handleSubmit = (e) => {
        try {
            if (formData.color !== '') {
                e.preventDefault();
                addColor(formData)
                setFormData(INITIAL_DATA)
                history.push('/colors')
            } else {
                e.preventDefault();
            }
        } catch (e) {
            console.log(e)
        }
    }


    const handleChange = (e) => {
        let { name, value } = e.target;
        // removing the # from color hex
        value = value.slice(1)
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return (
        <div className="Color-form-frame">
            <form className="Color-form" onSubmit={handleSubmit}>
                <label htmlFor="color">HEX: </label>
                <input
                    type="color"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    placeholder="000000"
                    className="Color-form-input"
                />
                <button className="Color-form-btn" >Add Color</button>
            </form>
        </div>
    )
}

export default NewColorForm;
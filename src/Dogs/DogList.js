import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./DogList.css"

const DogList = ({ dogs }) => {
    const history = useHistory()

    const showDetails = (dogName) => {
        history.push(`/dogs/${dogName.toLowerCase()}`)
    }
    return (
        <div className="dogs">
            {dogs.map(dog => (
                <div className="dog-card" >
                    <h3 className="dog-card-title">Name: {dog.name}</h3>
                    <img className="dog-card-img" src={dog.src} alt={`A dog named ${dog.name}`} />
                    <button className="dog-card-btn" onClick={() => showDetails(dog.name)}>Details</button>
                </div>
            ))}
        </div>
    )
}

export default DogList;
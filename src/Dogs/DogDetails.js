import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./DogDetails.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DogDetails = ({ dogInfo }) => {
    const { name } = useParams();

    return (
        <div className="dog-info">
            {dogInfo.map(dog => {
                if (dog.name.toLowerCase() === name.toLowerCase()) {
                    return (
                        <div className="dog-info-card">
                            <Link to="/dogs" className="dog-info-back-btn">⇦</Link>
                            <h3 className="dog-info-title">Name: {dog.name}</h3>
                            <p className="dog-info-age">Age: {dog.age}</p>
                            <img className="dog-info-img" src={dog.src} alt={`A dog named ${dog.name}`} />
                            <ul className="dog-info-facts">
                                {dog.facts.map(fact => (
                                    <li>{fact}</li>
                                ))}
                            </ul>
                        </div>)
                }
            })}
        </div>
    )


}

export default DogDetails;
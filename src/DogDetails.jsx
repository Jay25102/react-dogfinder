import React from "react";
import { Navigate, Link } from "react-router-dom";

const DogDetails = function({dog}) {
    if (!dog) return <Navigate to="/dogs"/>

    return (
        <div>
            <img src={`/src/assets/${dog.src}.jpg`} alt={dog.name}/>
            <h2>{dog.name}</h2>
            <h3>{dog.age} years old</h3>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Home</Link>
        </div>
    )
}

export default DogDetails;
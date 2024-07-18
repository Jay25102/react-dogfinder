import React from "react";
import { NavLink } from "react-router-dom";

const Homepage = function({dogs}) {

    return (
        <div>
            {dogs.map(d => (
                <NavLink key={d.name} to={`/dogs/${d.name.toLowerCase()}`}>
                    {d.name}
                </NavLink>
            ))}
        </div>
    )
}

export default Homepage;
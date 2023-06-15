import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav({ dogNames }) {
    const links = dogNames.map(name => (
        <NavLink key={name} exact to={`/dogs/${name.toLowerCase()}`}>{name}</NavLink>
    ))
    return (
        <div className="NavBar">
            <NavLink exact to="/dogs">Home</NavLink>
            {links}
        </div>
    );
}

export default Nav;

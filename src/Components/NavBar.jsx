import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="Nav">
            <h2><Link to="/">HOME</Link></h2>
        </nav>
    )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home Page </Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact </Link>
                    </li>
                    <li>
                        <Link to="/projects"> Projects </Link>
                    </li>
                    <li>
                        
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar

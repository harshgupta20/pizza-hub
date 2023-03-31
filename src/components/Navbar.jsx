import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <>
            <div id="nav">
                <div id="nav-body">
                    <p id="nav-p">Pizza Hub</p>
                    <Link to="/cart">
                        <button id="nav-cart">Cart <sup>12</sup></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
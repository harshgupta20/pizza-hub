import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {

    const [cartNum, setCartNum] = useState();

    useEffect(() => {
        const fetchCartData = JSON.parse(localStorage.getItem('cart'));
        setCartNum(fetchCartData.length);
    })

    return (
        <>
            <div id="nav">
                <div id="nav-body">
                    <Link style={{ textDecoration: "none", color: '#fff' }} to="/">
                        <p id="nav-p">Pizza Hub</p>
                    </Link>
                    <Link to="/cart">
                        <button id="nav-cart">Cart <sup>{cartNum}</sup></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
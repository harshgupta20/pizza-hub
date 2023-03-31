import React from 'react';
import { useState } from 'react';
import "../styles/Home.css";

const Home = () => {

    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [vegStatus, setVegStatus] = useState();

    // console.log(vegStatus);
    // console.log("------");
    // console.log(rating);
    // console.log("------");
    // console.log(price);

    return (
        <>
            <div id="home">
                <div id="home-filter">
                    <select onChange={(e) => setPrice(e.target.value)} name="price-filter" id="">
                        <option value="" disabled selected>Select Price</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
                    <select onChange={(e) => setRating(e.target.value)} name="rating-filter" id="">
                        <option value="" disabled selected>Select Rating</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Stars</option>
                    </select>
                    <label className="switch">
                        <input type="checkbox" onChange={(e) => setVegStatus(e.target.checked)} />
                        <span className="slider round"></span>
                    </label>


                </div>
            </div>
        </>
    )
}

export default Home
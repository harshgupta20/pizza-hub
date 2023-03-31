import React from 'react';
import { useState } from 'react';
import "../styles/Home.css";
import PizzaCard from '../components/PizzaCard';

const Home = () => {

    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [vegStatus, setVegStatus] = useState();

    // console.log(vegStatus);
    // console.log("------");
    // console.log(rating);
    // console.log("------");
    // console.log(price);

    // https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg

    return (
        <>
            <div id="home">
                <div id="home-filter">
                    <select id="home-filter-price" onChange={(e) => setPrice(e.target.value)} name="price-filter">
                        <option value="" disabled selected>Select Price</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
                    <select id="home-filter-rating" onChange={(e) => setRating(e.target.value)} name="rating-filter">
                        <option value="" disabled selected>Select Rating</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Stars</option>
                    </select>
                    <div id="home-filter-veg">
                        <p>Non-Veg</p>
                        <label style={{margin:'0 10px'}} className="switch">
                            <input type="checkbox" onChange={(e) => setVegStatus(e.target.checked)} />
                            <span className="slider round"></span>
                        </label>
                        <p>Veg</p>
                    </div>
                </div>


                    <PizzaCard />

            </div>
        </>
    )
}

export default Home
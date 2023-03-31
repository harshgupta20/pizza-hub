import React from 'react';
import { useState } from 'react';
import "../styles/Home.css";
import PizzaCard from '../components/PizzaCard';
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [vegStatus, setVegStatus] = useState();

    const [data, setData] = useState();

    // console.log(vegStatus);
    // console.log("------");
    // console.log(rating);
    // console.log("------");
    // console.log(price);


    useEffect(()=> {
        const dataFetch = async () => {
            const fetchData = await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
            setData(fetchData.data);
        }
        dataFetch();
        console.log("jkjk");
    },[])
    
    // console.log(data);


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
                        <label style={{ margin: '0 10px' }} className="switch">
                            <input type="checkbox" onChange={(e) => setVegStatus(e.target.checked)} />
                            <span className="slider round"></span>
                        </label>
                        <p>Veg</p>
                    </div>
                </div>

                <div id="pizza-list">
                    <div id="pizza-list-body">
                        {
                            data ? data.map((pizza, key)=>{
                                return (
                                    <PizzaCard key={key} id={pizza.id} image={pizza.img_url} name={pizza.name} desc={pizza.description} rating={pizza.rating} price={pizza.price} size={pizza.size} toppings={pizza.toppings} isVeg={pizza.isVeg} />
                                )
                            }) 
                            
                            : "Loading..."
                        }
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home
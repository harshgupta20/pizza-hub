import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import CartCard from '../components/CartCard';
import "../styles/Cart.css";

const Cart = () => {

  const [cartList, setCartList] = useState();

  useEffect(() => {
    const fetchData = JSON.parse(localStorage.getItem('cart'));
    if(!fetchData || fetchData === null){
      console.log("klklkl");
    }else{
      setCartList(fetchData);
    }
  },[])

  console.log(cartList);

  return (
    <>
      <div id="cart">
        <div id="cart-body">
          <h1 id="cart-h1">Your Cart looks Amazing </h1>
          <div id="cart-info">
            <div id="cart-list">
              {
                  cartList.map((pizza, key)=> {
                    return (
                      <CartCard key={key} id={pizza.id} image={pizza.image} name={pizza.name} desc={pizza.desc} rating={pizza.rating} price={pizza.price} size={pizza.size} toppings={pizza.toppings} isVeg={pizza.isVeg} cartStatus="true" />
                    )
                })
              }
            </div>
            <div id="cart-total">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
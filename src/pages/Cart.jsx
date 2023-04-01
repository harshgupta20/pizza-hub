import axios from 'axios';
import React, { useEffect } from 'react'
import CartCard from '../components/CartCard';
import "../styles/Cart.css";

const Cart = () => {

  useEffect(() => {
    const fetchData = JSON.parse(localStorage.getItem('cart'));
    if(!fetchData || fetchData === null){
      console.log("klklkl");
    }else{
      const data = fetchData.data;
      console.log(fetchData);
    }
  },[])

  return (
    <>
      <div id="cart">
        <div id="cart-body">
          <h1 id="cart-h1">Your Cart looks Amazing </h1>
          <div id="cart-info">
            <div id="cart-list">
              <CartCard />
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
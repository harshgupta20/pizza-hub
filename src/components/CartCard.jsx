import React from 'react';
import "../styles/CartCard.css";

const CartCard = ({ id, name, image, desc, isVeg, rating, price, size, toppings, cartStatus }) => {
  return (
    <>
        <div id="cart-card">
            <div id="cc-body">
                <img src={image} alt={`${image}_picture`} />
                <div id="cc-info">
                    <p>{name} - {isVeg}</p>
                    <p>{desc}</p>
                    <p>{rating}</p>
                    <div id="cc-price-q">
                      <p>{price}</p>
                      <div id="cc-btn">
                        <button id='cc-add'>+</button>
                        <button id='cc-sub'>-</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartCard
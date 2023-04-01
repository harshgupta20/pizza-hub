import React from 'react';
import "../styles/cartCard.css";

const CartCard = () => {
  return (
    <>
        <div id="cart-card">
            <div id="cc-body">
                <img src="" alt="" />
                <div id="cc-info">
                    <p>Onion Pizza - Veg</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel impedit ut voluptas</p>
                    <p>Rating</p>
                    <div id="cc-price-q">
                      <p>Price</p>
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
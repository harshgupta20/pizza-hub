import React, { useEffect, useState } from 'react';
import "../styles/CartCard.css";

const CartCard = ({ id, name, image, desc, isVeg, rating, price, size, toppings, cartStatus, quantity }) => {
  
  const [quantityState, setQuantityState] = useState();
  const [] = useState();

  const fetchCartData = JSON.parse(localStorage.getItem("cart"));
  
  const handleDeletePizza = () => {
    for(let i=0; i<fetchCartData.length; i++){
      if(fetchCartData[i].id == id){
        fetchCartData.splice(i,1);
      }
      localStorage.setItem("cart", JSON.stringify(fetchCartData));
    }
    window.location.reload();
  }

  const addQuantity = () => {
    for(let i=0; i<fetchCartData.length; i++){
      if(fetchCartData[i].id == id){
        fetchCartData[i].quantity = parseInt(quantity)+1;
      }
      localStorage.setItem("cart", JSON.stringify(fetchCartData));
    }
    setQuantityState(quantity+1);
    window.location.reload();
  }
  const subQuantity = () => {
    for(let i=0; i<fetchCartData.length; i++){
      if(fetchCartData[i].id == id){
        fetchCartData[i].quantity = parseInt(quantity)-1;
      }
      localStorage.setItem("cart", JSON.stringify(fetchCartData));
    }
    setQuantityState(quantity-1);
    window.location.reload();
  }
  
  useEffect(()=>{

  },[])
  
  return (
    <>
        <div id="cart-card">
            <div id="cc-body">
                <img id="cc-image" src={image} alt={`${image}_picture`} />
                <div id="cc-info">
                    <p id="cc-name">{name} - {isVeg ? "Veg" : "Non-Veg"} <span style={{color:'#FC2947'}}>&#10005; {quantity}</span></p>
                    <p id="cc-desc">{desc}</p>
                    <p id="cc-rating">{rating} Stars</p>
                    <div id="cc-price-q">
                      <p id="cc-price">{price*quantity} Rs.</p>
                      <div id="cc-btn">
                        <button onClick={addQuantity} id='cc-add'>+</button>
                        {
                          quantity<2 ? <button style={{opacity:'0.5',cursor:"not-allowed"}} id='cc-sub'>-</button> : <button onClick={subQuantity} id='cc-sub'>-</button>
                        }
                      </div>
                    </div>
                    <button onClick={handleDeletePizza} id="cc-delete">Delete</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartCard
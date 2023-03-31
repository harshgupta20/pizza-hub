import React from 'react';
import "../styles/PizzaCard.css";

const PizzaCard = () => {
  return (
    <>
      <div id="card">
        <div id="card-body">
          <img id="card-img" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg" alt="" />
          <div id="card-info">
            <div id="card-name-veg">
              <p id="card-name">Onion Pizza</p>
              <p id="card-veg">Veg</p>
            </div>
            <p id="card-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia inventore possimus officiis.</p>
          </div>
          <p id="card-rating">Rating</p>
          <p id="card-price">990 Rs.</p>
        </div>
        <button id="card-add">Add Pizza</button>
      </div>
    </>
  )
}

export default PizzaCard
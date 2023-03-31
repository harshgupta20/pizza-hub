import React from 'react';
import "../styles/PizzaCard.css";

const PizzaCard = ({id, name, image, desc, isVeg, rating, price}) => {

  console.log(image);

  return (
    <>
      <div id="card">
        <div id="card-body">
          <img id="card-img" src={image || ""} alt={`${name}_image`} />
          <div id="card-info">
            <div id="card-name-veg">
              <p id="card-name">{name}</p>
              <p id="card-veg">{isVeg ? "Veg" : "Non-Veg"}</p>
            </div>
            <p id="card-desc">{desc}</p>
          </div>
          <p id="card-rating">{rating}</p>
          <p id="card-price">{price} Rs.</p>
        </div>
        <button id="card-add">Add Pizza</button>
      </div>
    </>
  )
}

export default PizzaCard
import React, { useState } from 'react';
import "../styles/PizzaCard.css";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PizzaCard = ({ id, name, image, desc, isVeg, rating, price, size, toppings }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <button onClick={handleClickOpen} id="card-add">Add Pizza</button>
      </div>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div id="pop">
          <div id="pop-body">
            <img id="pop-img" src={image} alt={`${image}_image`} />

            <div id="pop-extra">
              <div id="pop-size">
                <p id="pop-size-p">Size</p>
                <div id="pop-size-option">
                  <label id="pop-size-label1" htmlFor="size1">
                    Regular
                    <input type="radio" name="size" id="size1" />
                  </label>
                  <label id="pop-size-label2" htmlFor="size2">
                    Medium
                    <input type="radio" name="size" id="size2" />
                  </label>
                  <label id="pop-size-label3" htmlFor="size3">
                    Large
                    <input type="radio" name="size" id="size3" />
                  </label>
                </div>
              </div>

              <div id="pop-toppings">
                <p id="pop-toppings-p">Toppings</p>
                <div id="pop-toppings-options">
                  <label id="pop-toppings-label" htmlFor="size3">
                    Large
                    <input type="radio" name="size" id="pop-size-option " />
                  </label>
                  <label id="pop-toppings-label" htmlFor="size3">
                    Large
                    <input type="radio" name="size" id="pop-size-option " />
                  </label>
                  <label id="pop-toppings-label" htmlFor="size3">
                    Large
                    <input type="radio" name="size" id="pop-size-option " />
                  </label>
                  <label id="pop-toppings-label" htmlFor="size3">
                    Large
                    <input type="radio" name="size" id="pop-size-option " />
                  </label>
                </div>
              </div>

                <button id="pop-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default PizzaCard
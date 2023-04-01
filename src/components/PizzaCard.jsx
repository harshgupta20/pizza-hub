import React, { useState } from 'react';
import "../styles/PizzaCard.css";
import Dialog from '@mui/material/Dialog';


const PizzaCard = ({ id, name, image, desc, isVeg, rating, price, size, toppings, cartStatus }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    // console.log(size[0].title);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // console.log(size);



  // ADD TO CART
  const handleAddToCart = () => {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    let temp = {
      id: id,
      name: name,
      image: image,
      desc, desc,
      isVeg: isVeg,
      rating: rating,
      price: price,
      quantity: '1',
      size, size,
      toppings: toppings,
      inCart:'true'
    }
    // console.log(cart);
    if (cart === null) {
      cart = [];
      cart.push(temp);
      cart = JSON.stringify(cart);
      localStorage.setItem("cart", cart);
    } else {
      cart.push(temp);
      console.log(cart);
      cart = JSON.stringify(cart);
      localStorage.setItem("cart", cart);
    }

    handleClose();
  }


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
        {
          cartStatus==="true" ? <button onClick={handleClickOpen} id="card-add">Remove From Cart</button> : <button onClick={handleClickOpen} id="card-add">Add Pizza</button>
        }
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

              {/* Size */}
              <div id="pop-size">
                <p id="pop-size-p">{size[0].title}</p>
                <div id="pop-size-option">
                  {
                    size &&
                    size[0].items.map((data) => {
                      return (
                        <label id={`pop-size-label${data.size == "Regular" ? "1" : (data.size == "Medium" ? "2" : "3")}`} htmlFor={`size1${data.size == "Regular" ? "1" : (data.size == "Medium" ? "2" : "3")}`}>
                          {data.size}
                          <input type="radio" name="size" value={data.size} id={`size1${data.size == "Regular" ? "1" : (data.size == "Medium" ? "2" : "3")}`} />
                        </label>
                      )
                    })
                  }
                </div>
              </div>

              {/* Toppings */}
              <div id="pop-toppings">
                <p id="pop-toppings-p">Toppings</p>
                <div id="pop-toppings-options">
                  {
                    toppings[0].items.map((data) => {
                      return (
                        <label id="pop-toppings-label">
                          {data.name}
                          <input type="radio" name="toppings" id="pop-toppings-option" />
                        </label>
                      )
                    })
                  }
                </div>
              </div>
              <button onClick={handleAddToCart} id="pop-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default PizzaCard
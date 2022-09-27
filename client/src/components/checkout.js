import React from "react";
import './Item.css';

const BASE_URL='http://localhost:3005/';
const Checkout = ({ item, addToCart }) => {
  return ( 
    <div className="item">
      <img
        className="singleItem__image"
        src={BASE_URL+item.image}
        width='50px'
        alt={item.title}
      />
      <div className="singleItem__details">
        <p className="details__title">{item.name}  </p>
        <p className="details__price">$ {item.price}</p>
      </div>
    </div>
  );
};

export default Checkout;
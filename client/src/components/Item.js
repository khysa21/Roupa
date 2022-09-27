import React from "react";
import './Item.css';

const BASE_URL='http://localhost:3005/';
const Item = ({ item, addToCart }) => {
  return ( 
    <div className="item">
      <img
        className="singleItem__image"
        src={BASE_URL+item.image}
        width='50px'
        alt={item.title}
      />
      <div className="singleItem__details">
        <p className="details__title">{item.name} ${item.price}</p>
        {/* <p className="details__description">{item.description}</p> */}
        {/* <p className="details__price">$ {item.price}</p> */}

        <button
          onClick={() => addToCart(item.id)}
          className="details__addBtn"
        >
         Add 
        </button>
      </div>
    </div>
  );
};

export default Item;
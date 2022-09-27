import React from "react";
import './Item.css';
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../redux/Shopping/shopping-actions";

const BASE_URL='http://localhost:3005/';
const Item = ({ item }) => {
 // const cart = useSelector(state => state.shop.cart);
  const dispatch = useDispatch();

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
        {/* <p className="details__description">{item.description}</p> */}
        <p className="details__price">$ {item.price}</p>

        <button href="/"
          onClick={ () => {
              dispatch(addToCart(item.id));
              dispatch(loadCurrentItem(item));
            } 
          }
          className="details__addBtn"
        >
         Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
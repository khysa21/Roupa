import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shopping-actions";

const BASE_URL='http://localhost:3005/';
const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const dispatch=useDispatch();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };

  return (
    <div className="cartItem">
      <img
        className="cartItem__image"
        src={BASE_URL+item.image}
        alt={item.title}
      />
      <div className="cartItem__details">
        <p className="details__title">{item.title}</p>
        {/* <p className="details__desc">{item.description}</p> */}
        <p className="details__price">£ {item.price}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <label htmlFor="qty">Quantity</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="actions__deleteItemBtn"
        >
          <img src="https://img.icons8.com/ios-glyphs/344/filled-trash.png" alt="remove items" /> 
        </button>
      </div>
    </div>
  );
};

export default CartItem;

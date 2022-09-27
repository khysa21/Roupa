import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiService from "../apiService";
import "./Cart.css";
import {  removeFromCart} from "../redux/Shopping/shopping-actions";
import CartItem from "./CartItem";
import StripCheckoutButton from './stripe'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const cart = useSelector(state => state.shop.cart);
  const dispatch=useDispatch();
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const handleBuy = () => {
    if(window.confirm('Do you want to buy the items?')) {

      cart.forEach((item) => {
        //apiService.updateItem(item);//status is changed to sold
        dispatch(removeFromCart(item))
      });
      
    }

  };
  return (
    <div className="cart">
      <div className="cart__items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span>TOTAL: ({totalItems} items)</span>
          <span>£ {totalPrice}</span>
        </div>
        <StripCheckoutButton />
      </div>
    </div>
  );
};

export default Cart;

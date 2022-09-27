import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, userdata }) => {
  const [cartCount, setCartCount] = useState(0);

  const cart = useSelector(state => state.shop.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav>
      <ul>
        {!isAuthenticated ? (
          <>
            <li className="links">
              <Link to="/register">Register</Link>
            </li>
            <li className="links">
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <div className="welcome-user">
              Welcome {userdata.name} {userdata.surname}
            </div>
            <li>
              <Link to="/buy">Buy</Link>
            </li>
            <li>
              <Link to="/sell">Sell</Link>
            </li>
            <li>
              <Link to="/ouritems">Clothes Listed</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li className="cart_nav">
              <Link to="/cart">
                <div className="navbar__cart">
                  <h3 className="cart__title">Cart</h3>
                  <img
                    className="cart__image"
                    src="https://cdn-icons-png.flaticon.com/512/102/102276.png"
                    width="20px"
                    alt="shopping cart"
                  />
                  <div className="cart__counter">{cartCount}</div>
                </div>
              </Link>
            </li>
            <li className="logout">
              <Link to="/logout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

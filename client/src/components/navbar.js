import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, userdata }) => {
  return (
    <nav>
      <ul>
        {!isAuthenticated ? (
          <>
            <li class="links">
              <Link to="/register">Register</Link>
            </li>
            <li class="links">
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
          <div>Welcome {userdata.name}  {userdata.surname}</div>
            <li>
              <Link to="/items">List of Items</Link>
            </li>
            <li>
              <Link to="/sell">Sell Items</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

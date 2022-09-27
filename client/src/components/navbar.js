import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, userdata }) => {
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
              <Link to="/items">List of My Items</Link>
            </li>
            <li>
              <Link to="/sell">Sell Items</Link>
            </li>
            <li>
              <Link to="/ouritems">Our Items Status</Link>
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

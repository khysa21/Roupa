import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './sign-up';
import SignIn from './sign-in';
import ListItems from './listitems';
import Logout from './logout';
// import Home from './Home';

const Dashboard = ({ setIsAuthenticated }) => {
  return (
    <div className="dashboard">
      <Routes>
        <Route
          path="/register"
          element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/login"
          element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/items" element={<ListItems />} />
        <Route
          path="/logout"
          element={<Logout setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/items" element={<ListItems  />} /> 
      </Routes>
    </div>
  );
};

export default Dashboard;

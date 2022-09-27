import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './sign-up';
import SignIn from './sign-in';
import ListItems from './listitems';
import Logout from './logout';
import SellItem from './sellItem';
import BuyItem from './buyitems';
import OurItems from './ourItems';

const Dashboard = ({ setIsAuthenticated, setUserData, userdata }) => {
  return (
    <div className="dashboard">
      <Routes>
        <Route
          path="/register"
          element={<Register setIsAuthenticated={setIsAuthenticated} setUserData={setUserData}/>}
        />
        <Route
          path="/login"
          element={<SignIn setIsAuthenticated={setIsAuthenticated} setUserData={setUserData} />}
        />
        {/* <Route path="/items" element={<ListItems userdata={userdata} />} /> */}
        <Route path="/sell" element={<SellItem userdata={userdata} />} />
        <Route path="/buy" element={<BuyItem userdata={userdata} />} />
        <Route path="/ouritems" element={<OurItems userdata={userdata} />} />
        <Route
          path="/logout"
          element={<Logout setIsAuthenticated={setIsAuthenticated} setUserData={setUserData} />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;

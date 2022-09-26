import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import auth from './utils/auth'
import Dashboard from './components/dashboard';
import './App.css';
// import MyComponent from './components/dragAndDrop'
import Login from './components/sign-in';
// import SignUp from './components/sign-up';

function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div className="App">
      <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Dashboard setIsAuthenticated={setIsAuthenticated} />
      </Router>
    </div>
  );
}

export default App;

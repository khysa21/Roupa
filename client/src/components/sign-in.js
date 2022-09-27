import React, { useState } from "react";
import auth from "../utils/auth";
import apiService from "../apiService";
import { useNavigate } from "react-router-dom";
import FormInput from "./forminput";

const initialState = {
  email: "",
  password: "",
};

const Login = (props) => {
  let navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    const user = { email, password };
    const res = await apiService.login(user);
    console.log(`${JSON.stringify(res)}`);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      props.setUserData(res);
      auth.login(() => navigate("/items"));
    }
  };

  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <center>
      <h2 className="header">Sign In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="example@mail.com"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        
        <FormInput
          className="password"
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Login&nbsp;
        </button>
      </form>
    </center>
  );
};

export default Login;

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
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      auth.login(() => navigate("/profile"));
    }
  };

  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <section>
      <h2 className="header">Sign In or Sign Up</h2>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="example@mail.com"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <FormInput
          className="password"
          type="password"
          label="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Login&nbsp;
        </button>
      </form>
    </section>
  );
};

export default Login;
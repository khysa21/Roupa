import React, { useState } from 'react';
import auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import apiService from './../apiService';
import { v4 as uuid } from 'uuid';
// import FormInput from "./forminput";

const unique_id = uuid();

const initialState = {
  id: unique_id,
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const SignUp = (props) => {
  const navigate = useNavigate();
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
    const { id, email, password, name, surname , passwordcheck } = state;
    const user = { id, name, surname, email, password  };
    const res = await apiService.register(user)
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      auth.login(() => navigate('/'));
    }
  };
  const checkPasswordSame = () => {
    return state.password===state.passwordcheck;
  }
  const validateForm = () => {
    return (
      !state.email || !state.password || !state.name || !state.surname || !checkPasswordSame()
    );
  };

  return (
    <section>
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="example@mail.com"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Type again"
          name="passwordcheck"
          value={state.passwordcheck}
          onChange={handleChange}
          // className='${checkPasswordSame()? `green`:`red`}'
        />
        {checkPasswordSame()? (
          <p>Password the same</p>
        ) : (
          <p>Password not the same</p>
        )}
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="surname"
          value={state.surname}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
      </form>
    </section>
  );
};

export default SignUp;
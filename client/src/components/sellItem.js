//This is the component to sell items (upload item)
import React, { useState } from 'react';
import auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import apiService from './../apiService';
import { v4 as uuid } from 'uuid';

const unique_id = uuid();

const initialState = {
  id: unique_id,
  name: "",
  category: "",
  description: "",
  status: "onsale",
  price: 0,
  quantity: 0,
  image: "",
  userid: "",
};

export default function SellItem(props) {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  state.userid=props.userdata.id;
  let file={selectedFile: null};
  const onFileChange = e =>{
    file.selectedFile=e.target.files[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { id, name, category, description, status, price, quantity, image, userid } = state;
    alert(file.selectedFile)
    const file = await apiService.uploadImage(file.selectedFile);
    
    const res = await apiService.addItem(state);
    if(res){
      alert(`${res.message}`);
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      props.setUserData(res);
      auth.login(() => navigate('/items'));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return (
      !state.name ||
      !state.category ||
      !state.description ||
      !state.price ||
      !state.quantity 
    );
  };
  return (
    <section>
      <h2>Add an Item</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={state.category}
          onChange={handleChange}
        />
        <textarea
          placeholder="Enter Description here"
          name="description"
          onChange={handleChange}
        >{state.description}</textarea>
        
        <input
          type="text"
          placeholder="Enter Price"
          name="price"
          value={state.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Quantity"
          name="quantity"
          value={state.quantity}
          onChange={handleChange}
        />
        <input type='file' onChange={onFileChange} />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
      </form>
    </section>
  );
}
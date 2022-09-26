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
const initialFile = {selectedFile: null};
export default function SellItem(props) {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [file, setFile] = useState(initialFile);

  if (!props.userdata) {
    navigate('/');
  } else state.userid=props.userdata.id;
  //alert(state.userid);
  
  const onFileChange = e =>{
    setFile({selectedFile: e.target.files[0]});
    console.log(file);
  };
// center kto
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, name, category, description, status, price, quantity, image, userid } = state;
    // alert(JSON.stringify(file.selectedFile));

    console.log(file.selectedFile);
    const fileimage = await apiService.uploadImage(file.selectedFile);at
    // alert(JSON.stringify(fileimage));
    const res = await apiService.addItem({ id: id, name: name, category: category, description: description, status:status, price:price, quantity:quantity, image:fileimage.originalname, userid:userid });
    if(res){
      // alert(`${res.message}`);
      // setState();
    } else {
      // props.setIsAuthenticated(true);
      // props.setUserData(res);
      navigate('/items');
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
    <center>
      <h2>Add Item</h2>
      <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
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
          value={state.description}
        />
        
        <input
          type="number"
          placeholder="Enter Price"
          name="price"
          value={state.price}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Quantity"
          name="quantity"
          value={state.quantity}
          onChange={handleChange}
        />
        <input type='file' onChange={onFileChange} />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Add Item&nbsp;
        </button>
      </form>
    </center>
  );
}
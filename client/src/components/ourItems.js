import React, { useState, useEffect }  from "react";
import apiService from "../apiService";
import MyItem from './myItems';
import './Item.css';

const OurItems = (props) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function getdata(){
      const lista=await apiService.getitems();
      const ouritems=lista.filter((el) => el.userid===props.userdata.id)
      setData(ouritems);
      console.log(ouritems);
    }
    getdata();
  },[]);
  console.log(data);
  return (
    <div className="products">
      {data.map((product) => (
        <MyItem key={product.id} item={product} />
      ))}
    </div>
  );
}

export default OurItems;
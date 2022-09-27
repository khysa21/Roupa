import React, { useState, useEffect }  from "react";
import apiService from "../apiService";
import Item from './Item';
import './Item.css';

const BuyItems = (props) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function getdata(){
      const lista=await apiService.getitems();
      const onsale=lista.filter((el) => el.status==='onsale')
      setData(onsale);
    }
    getdata();
  },[]);
  //console.log(data);
  return (
    <div className="products">
      {data.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
}

export default BuyItems;
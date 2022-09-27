import React, { useState, useEffect } from "react";
import apiService from "../apiService";
import MyItem from "./myItems";
import "./Item.css";

const ListItems = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getdata() {
      const lista = await apiService.getitems();
      setData(lista);
    }
    getdata();
  }, []);
  console.log(data);
  return (
    <div className="products">
      {data.map((product) => (
        <MyItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ListItems;

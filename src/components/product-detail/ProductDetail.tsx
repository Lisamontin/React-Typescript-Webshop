import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import IProducts from '../../models/interface/IProducts';


interface IParams{
  id: string;
}
const defaultValue:IProducts = {id:0, name:'', description:'', price:0, imageUrl:'', year:0};

export default function ProductDetail() {
  let { id } = useParams<IParams>();
  
  const [product, setProduct] = useState(defaultValue);

  useEffect(() => {
    axios.get(`https://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`)
      .then(response => setProduct(response.data));

    }, []);

console.log(id);
  return(


    <div>
      <h1> Product detail Component</h1>
      <h3></h3>
  <h3>{product.name}</h3>
    <img src={product.imageUrl}></img>
      <button>add to cart</button>
      <button>Go back to products</button>
      
    </div>

  )
}

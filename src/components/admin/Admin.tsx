import axios from 'axios';
import React, { useEffect, useState } from 'react';


// interface ICreatedBy {

// }

interface IOrders {
  id: number,
  created: string,
  createdBy: {},//interface
  paymentMethod: string,
  totalPrice: number,

}

export default function Admin() {

  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios.get('http://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=54321')
    .then(response => setOrders(response.data))
   
  })
  let ordersHtml = orders.map((order: IOrders) => {
    return (
     <section key={order.id}>
       <div>
         <ul>
          <li>{order.id}</li>
          <li>{order.created}</li>
          <li>{order.createdBy}</li>
          <li>{order.paymentMethod}</li>
          <li>{order.totalPrice}</li>
         </ul>
       </div>
     </section>
   )
   
 });


return(
  <div>
  <h1>ADMIN</h1>
  <h3>ORDERS:</h3>
  {ordersHtml}
  </div>
)
}
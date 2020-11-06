import React, { useState } from 'react';
import axios from 'axios';
import CustomerInformation, {IUserForm} from '../customer-information/CustomerInformation';
import IFinalCart from '../../models/interface/IFinalCart';
import { Link } from 'react-router-dom';


//display total price
// X lift customer information from form component x
// X retun form component x
// send customer and order (cart) information to api with click of button

// "toggle view"... when buy button is clicked, link to confirmation page

//create order object to send to api, what does the api want? id, companyId, created (time/date), createdBy, 
//paymentMethod, totalPrice, status?, orderRows [{id, productId, product(name?), amount, orderId}]


export default function Checkout(props: IFinalCart) {
  
  
  //Gather userForm and products added to cart in an order to send to api
  
  // const [order, setOrder] = useState({});

  ///////////////////////////Send to API functionality//////////////////////////////////////////

  let getTime = '0001-01-01T00:00:00'; //how do i get the time in the right format?

  function sendOrder() {
    const order = {
      id: 0, 
      companyId: 54321,
      created: getTime,//get time function
      createdBy: JSON.stringify(userForm),
      paymentMethod: 'visa',
      totalPrice: 0,//get total price function
      status: 0,
      orderRows: props.finalCart// cart content
    };

    console.log('sendOrder function ran');
    console.log(order, 'order logged here');
    
    axios.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order)
      .then(function (response) {
        console.log(response);
        })
      .catch(function (error) {
        console.log(error);
        });  
        
  }

  
  //////////////////////Customer Form Functionality/////////////////////

  const defaultvalue:IUserForm = { firstName: '', lastName: '', street: '', zip: 0, city: '', email: '' }

  const [userForm, setUserForm] = useState(defaultvalue); // ska fanga informationen som kommer fran child
  const [showOrderButton, setShowOrderButton] = useState(false);
  const [showForm, setshowForm] = useState(true);

  function updateCustomerInformation(formValue: IUserForm):void {
      setUserForm(formValue);
      setShowOrderButton(true);
      setshowForm(false)
  }
  let formHtml = showForm ? <CustomerInformation updateInfo={updateCustomerInformation}></CustomerInformation> : <></>
  let buttonHtml = showOrderButton ? <Link to="/confirmationPage"><button type="button" onClick={sendOrder}>Place Order</button></Link> : <></>;
  
  return(

    <div className="checkout">
      <h1>Checkout component</h1>
      <h4>Total amount: ...{}</h4>
      <p>Please provide your information:</p>
      {formHtml}
      {buttonHtml}
  
    </div>

  )
}

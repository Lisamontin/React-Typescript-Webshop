import React, { useState } from 'react';
import CustomerInformation, {IUserForm} from '../customer-information/CustomerInformation';


//display total price
// X lift customer information from form component x
// X retun form component x
// send customer and order (cart) information to api with click of button

// "toggle view"... when buy button is clicked, link to confirmation page

//create order object to send to api, what does the api want? id, companyId, created (time/date), createdBy, 
//paymentMethod, totalPrice, status?, orderRows [{id, productId, product(name?), amount, orderId}]


export default function Checkout() {
  
  
  //Gather userForm and products added to cart in an order to send to api
  
  // const [order, setOrder] = useState({});
    // function getTime() {
    //   let today = new Date();
    //   let time = `${today.getFullYear()} ${today.getHours()} ${today.getMinutes()} ${today.getSeconds()}`
    //   return time;
    // };

    let getTime = new Date('0001-01-01T00:00:00')

  function sendOrder() {
    const order = {
      id: 0, 
      companyId: 12345,
      created: getTime,//get time function
      createdBy: userForm,
      paymentMethod: 'visa',
      totalPrice: 0,//get total price function
      status: 0,
      orderRows: [] // cart content
    }
}




  
  //////////////////////Customer Form Functionality/////////////////////

  const defaultvalue:IUserForm = { firstName: '', lastName: '', street: '', zip: 0, city: '', email: '' }

  const [userForm, setUserForm] = useState(defaultvalue); // ska fanga informationen som kommer fran child

  function updateCustomerInformation(formValue: IUserForm):void {
      setUserForm(formValue);
      console.log(formValue.firstName, "----formValue.firstName logged here!");
  }
  function test() {
    console.log('button was clicked');
  }

  return(

    <div className="checkout">
      <h1>Checkout component</h1>
      <h4>Total amount: ...{}</h4>
      <p>Please provide your information:</p>
      <CustomerInformation updateInfo={updateCustomerInformation}></CustomerInformation>

      <button type="button" onClick={test}>Buy button from checkout</button> 
      {/* //not allowed to trigger updateCustomerInformation function with onClick in parent...? Must trigger in child (customerInformation)*/}
    </div>

  )
}

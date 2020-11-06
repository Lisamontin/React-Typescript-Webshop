import React, { ChangeEvent, useState } from 'react';
import '../customer-information/CustomerInformation.css';



export interface IUserForm{
  firstName: string;
  lastName: string;
  street: string;
  zip: number;
  city: string;
  email: string;
}

interface IUserFormProps{
  updateInfo(values: IUserForm):void;
}

export default function Child(props: IUserFormProps) {
  const defaultvalue:IUserForm = { firstName: '', lastName: '', street: '', zip: 0, city: '', email: '' }

  const [userForm, setUserForm] = useState(defaultvalue);

  function updateUserForm(e: ChangeEvent<any>) { //HTMLInputElement for text... but might be any in future
     const name = e.target.name; //firstname
     const value = e.target.value; //Bill or Bull

     setUserForm({...userForm, [name]: value}) // ... keep the same object but change "name value"
  }

  function handleClick() {
      props.updateInfo(userForm); // connected to parent's (updateCustomerInfo function)
  }
  console.log(userForm, 'userForm logged here!');

  return(
      <form className="form">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstName" name="firstName" value={ userForm.firstName } onChange={ updateUserForm }/>

          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastName" value={ userForm.lastName } onChange={ updateUserForm }/>

          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" value={ userForm.street } onChange={ updateUserForm }/>

          <label htmlFor="zip">Zip</label>
          <input type="number" id="zip" name="zip" value={ userForm.zip } onChange={ updateUserForm }/>

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={ userForm.city } onChange={ updateUserForm }/>

          <label htmlFor="email">E-Mail</label>
          <input type="text" id="email" name="email" value={ userForm.email } onChange={ updateUserForm }/>
  
          <button type="button" onClick={handleClick}>Next</button>
      </form>
  )
}

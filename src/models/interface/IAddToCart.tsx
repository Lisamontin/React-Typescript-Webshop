import ICart from "./ICart";


export default interface IaddToCartProps{
  //updateCart():void; //to send "template" function to parent component 
  updateCart(value: ICart):void;
}
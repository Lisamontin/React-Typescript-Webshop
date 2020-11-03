import ICart from "./ICart";


export default interface IaddToCartProps{
  updateCount(value: ICart):void;
}
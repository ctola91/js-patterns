import { IOrder } from "../IOrder";
export default class EmptyOrder implements IOrder {
  validate() {
    return false;
  }

  sale() {
    console.log("undefined");
  }
}

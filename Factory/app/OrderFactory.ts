import { IOrder } from "./IOrder";
import EmptyOrder from "./impl/EmptyOrder";
import CashOrder from "./impl/CashOrder";
import CreditOrder from "./impl/CreditOrder";

export default class OrderFactory {
  getOrder(type: String): IOrder {
    switch (type) {
      case "empty":
        return new EmptyOrder();
        break;
      case "cash":
        return new CashOrder();
        break;
      case "credit":
        return new CreditOrder();
        break;
      default:
        return new EmptyOrder();
        break;
    }
  }
}

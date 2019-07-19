import { IOrder } from '../IOrder';
export default class CreditOrder implements IOrder {
    validate() {
        return true;
    }

    sale() {
        console.log('credit order');
    }
}
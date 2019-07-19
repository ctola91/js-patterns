import { IOrder } from '../IOrder';
export default class CashOrder implements IOrder{
    validate() {
        return true;
    }

    sale() {
        console.log('cash order');
    }
}
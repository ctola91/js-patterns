import OrderFactory from './OrderFactory';

let orderFactory: OrderFactory;
orderFactory = new OrderFactory();
let cashOrder = orderFactory.getOrder('cash');
let creditOrder = orderFactory.getOrder('credit');

cashOrder.sale();
creditOrder.sale();
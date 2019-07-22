import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  orders = [];
  confirmOrder = [];


  constructor() {
  }

  addBasket(basket) {
    this.orders.push(basket);
  }

  getBasket() {
    return this.orders;
  }

  setConfirmOrder(order) {
    this.confirmOrder = order;
  }

  getConfirmOrder() {
    return this.confirmOrder;
  }
}

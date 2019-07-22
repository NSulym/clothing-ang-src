import {Component, OnInit} from '@angular/core';
import {BasketService} from '../services/basket.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {NgxNotificationService} from 'ngx-notification';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orders;
  count = 1;


  constructor(private basketService: BasketService, private ngxNotificationService: NgxNotificationService) {
  }

  ngOnInit() {
    this.orders = this.basketService.getBasket();
  }

  onDeleteIndex(i) {
    this.orders.splice(i, 1);
    this.ngxNotificationService.sendMessage('Successfully deleted', 'success', 'bottom-right');
  }
}

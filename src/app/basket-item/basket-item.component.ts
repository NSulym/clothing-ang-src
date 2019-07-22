import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketService} from '../services/basket.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {NgxNotificationService} from 'ngx-notification';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {
  @Input() order;
  @Input() index;
  count = 1;
  @Output() deleteIndex = new EventEmitter();

  constructor(private basketService: BasketService, public ngxSmartModalService: NgxSmartModalService,
              private ngxNotificationService: NgxNotificationService) {
  }

  ngOnInit() {
  }

  deleteOrder(i) {
    this.deleteIndex.emit(i);
  }

  changeCount(i) {
    this.count = +this.count + +i;
  }

  onConfirm(price, type) {
    this.ngxSmartModalService.getModal('myModal').open();
    const order = {
      price,
      type,
      count: this.count
    };
    this.basketService.setConfirmOrder(order);
  }

}

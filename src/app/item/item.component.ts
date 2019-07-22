import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from '../services/basket.service';
import {NgxNotificationService} from 'ngx-notification';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  showSize = false;
  showColor = false;
  selectSize = 'm';
  selectColor = '#00f';
  @Input() option;
  number;
  changePrice = false;


  constructor(private basketService: BasketService, private ngxNotificationService: NgxNotificationService) {

  }

  ngOnInit() {
  }


  onEnter() {
    this.showSize = !this.showSize;
  }

  onLeave() {
    this.showSize = !this.showSize;
  }

  onSelectSize(size) {
    this.selectSize = size;
  }

  onEnterColor() {
    this.showColor = !this.showColor;
  }

  onLeaveColor() {
    this.showColor = !this.showColor;
  }

  onSelectColor(color) {
    this.selectColor = color;
  }

  save(text) {
    if (text.value !== '' && !this.changePrice) {
      this.option.price = +this.option.price + +5;
      this.changePrice = true;
    } else if (text.value === '' && this.changePrice) {
      this.option.price = +this.option.price - +5;
      this.changePrice = false;
    }
    const basket = {
      color: this.selectColor,
      size: this.selectSize,
      text: text.value,
      price: this.option.price,
      type: this.option.type
    };
    this.basketService.addBasket(basket);
    this.ngxNotificationService.sendMessage('Success', 'success', 'bottom-right');
  }
}


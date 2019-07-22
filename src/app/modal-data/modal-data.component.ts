import {Component, DoCheck, OnInit} from '@angular/core';
import {BasketService} from '../services/basket.service';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-modal-data',
  templateUrl: './modal-data.component.html',
  styleUrls: ['./modal-data.component.scss']
})
export class ModalDataComponent implements OnInit, DoCheck {
  selectedOrders;

  constructor(private basketService: BasketService, public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.selectedOrders = this.basketService.getConfirmOrder();
  }

  goToBasket() {
    this.ngxSmartModalService.getModal('myModal').close();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SizeComponent } from './size/size.component';
import { ItemComponent } from './item/item.component';
import { ColorComponent } from './color/color.component';
import { BasketComponent } from './basket/basket.component';
import {BasketService} from './services/basket.service';
import { NgxNotificationComponent } from 'ngx-notification';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import { ModalDataComponent } from './modal-data/modal-data.component';
import { BasketItemComponent } from './basket-item/basket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    SizeComponent,
    ItemComponent,
    ColorComponent,
    BasketComponent,
    NgxNotificationComponent,
    ModalDataComponent,
    BasketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

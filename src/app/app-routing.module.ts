import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BasketComponent} from './basket/basket.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'basket', component: BasketComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

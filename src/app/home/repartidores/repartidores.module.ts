import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidoresRoutingModule } from './repartidores-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RepartidoresRoutingModule
  ]
})
export class RepartidoresModule { }

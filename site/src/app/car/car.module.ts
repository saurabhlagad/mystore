import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { BookedCarComponent } from './booked-car/booked-car.component';
import { FormsModule } from '@angular/forms';
import { CarBookComponent } from './car-book/car-book.component';


@NgModule({
  declarations: [CarListComponent, BookedCarComponent, CarBookComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule
  ]
})
export class CarModule { }

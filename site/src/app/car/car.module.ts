import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { BookedCarComponent } from './booked-car/booked-car.component';
import { FormsModule } from '@angular/forms';
import { CarBookComponent } from './car-book/car-book.component';
import { CarInfoComponent } from './car-info/car-info.component';



@NgModule({
  declarations: [CarListComponent, BookedCarComponent, CarBookComponent,CarInfoComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule
  ]
})
export class CarModule { }

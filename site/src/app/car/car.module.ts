import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { BookedCarComponent } from './booked-car/booked-car.component';
import { FormsModule } from '@angular/forms';
import { CarBookComponent } from './car-book/car-book.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { CarFeedbackComponent } from './car-feedback/car-feedback.component';
import { CarRentComponent } from './car-rent/car-rent.component';
//import { NgbdTimepickerValidation } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [CarListComponent, BookedCarComponent, CarBookComponent,CarInfoComponent, CarFeedbackComponent, CarRentComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule,
    NgbModule,BrowserModule, ReactiveFormsModule
  ]
})
export class CarModule { }

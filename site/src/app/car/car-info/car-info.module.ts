import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRatingComponent } from './car-rating/car-rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarRatingModule} from './car-rating/car-rating.module'
//import {CarRatingComponent} from './car-rating/car-rating.component'

@NgModule({
  declarations: [CarRatingComponent],
  imports: [
    BrowserModule, NgbModule,
    CommonModule,
    CarRatingComponent
  ],
  exports:[CarRatingComponent]
})
export class CarInfoModule { }

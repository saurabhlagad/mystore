import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRatingComponent } from './car-rating.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CarRatingComponent],
  imports: [
    BrowserModule, NgbModule,
    CommonModule
  ],
  exports:[CarRatingComponent]
})
export class CarRatingModule { }



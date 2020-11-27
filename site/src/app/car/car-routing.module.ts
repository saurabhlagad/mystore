import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookedCarComponent } from './booked-car/booked-car.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  {path:'car-list',component:CarListComponent},
  {path:'booked-cars',component:BookedCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }

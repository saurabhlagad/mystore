import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';

const routes: Routes = [
  {path:'home',component:GuestHomeComponent},
  {path:'',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }


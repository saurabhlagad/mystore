import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestAboutusComponent } from './guest-aboutus/guest-aboutus.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';

const routes: Routes = [
  {path:'home',component:GuestHomeComponent},
  //{path:'',redirectTo:'home'},
  {path:'aboutus',component:GuestAboutusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }


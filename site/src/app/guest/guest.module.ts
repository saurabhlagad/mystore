import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { GuestAboutusComponent } from './guest-aboutus/guest-aboutus.component';


@NgModule({
  declarations: [GuestHomeComponent, GuestAboutusComponent],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }

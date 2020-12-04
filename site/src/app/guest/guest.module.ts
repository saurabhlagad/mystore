import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestHomeComponent } from './guest-home/guest-home.component';


@NgModule({
  declarations: [GuestHomeComponent],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }

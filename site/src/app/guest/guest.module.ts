import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuestRoutingModule } from './guest-routing.module';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { GuestAboutusComponent } from './guest-aboutus/guest-aboutus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GuestHomeComponent, GuestAboutusComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class GuestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressAddComponent } from './address-add/address-add.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddressListComponent, AddressEditComponent, ProfileComponent, AddressAddComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr';
import { AuthModule } from './auth/auth.module';
//import { OrderModule } from './order/order.module';
//import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { GuestModule } from './guest/guest.module';
//import { GenerateBillComponent } from './bookedcar/generate-bill/generate-bill.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    //GenerateBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthModule,
    //OrderModule,
    //ProductModule,
    UserModule,
    CarModule,
    GuestModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

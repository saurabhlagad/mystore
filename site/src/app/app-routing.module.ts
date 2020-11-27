import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)},
  {path:'home',component:HomeComponent,
   children:[
     {path:'user',loadChildren:()=>import('./user/user-routing.module').then(m=>m.UserRoutingModule)},
     //{path:'order',loadChildren:()=>import('./order/order-routing.module').then(m=>m.OrderRoutingModule)},
     //{path:'product',loadChildren:()=>import('./product/product-routing.module').then(m=>m.ProductRoutingModule)},
     {path:'car',loadChildren:()=>import('./car/car-routing.module').then(m=>m.CarRoutingModule)}
   ]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

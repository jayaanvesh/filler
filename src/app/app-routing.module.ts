import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { CartComponent } from './cart/cart.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { EcomGuard } from './ecom.guard';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

var routes: Routes = [
  {path:'Home', component: HomeComponent},
  {path:'Login', component: LoginComponent},
  {path:'Register', component: RegisterComponent},
  {path:'AdminRegister', component: AdminRegisterComponent},
  {path:'AdminLogin', component: AdminLoginComponent},
  {path:'AdminProduct', component: AdminProductComponent},
  {path:'Aboutus', component: AboutusComponent,canActivate:[EcomGuard]},
  {path:'Myaccount', component: MyaccountComponent,canActivate:[EcomGuard]},
  {path:'Cart', component: CartComponent,canActivate:[EcomGuard]},
  {path:'Userhome', component: UserhomeComponent,canActivate:[EcomGuard]},
  {path:"", redirectTo:'/Home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CaroselComponent } from './carosel/carosel.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { CartComponent } from './cart/cart.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { EcommerceService } from './ecommerce.service';
import { EcomGuard } from './ecom.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { CustomPipe } from './custom.pipe';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminProductComponent } from './admin-product/admin-product.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    ProductsComponent,
    NavComponent,
    FooterComponent,
    CaroselComponent,
    MyaccountComponent,
    CartComponent,
    UserhomeComponent,
    CustomPipe,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EcommerceService, EcomGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

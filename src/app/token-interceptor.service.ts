import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { EcommerceService } from './ecommerce.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req, next){
    var ecommerceService = this.injector.get(EcommerceService);
    var tokenizedReq = req.clone({
      setHeaders: {
        Authorization:`Bearer ${ecommerceService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}

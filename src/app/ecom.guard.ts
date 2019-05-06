import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { EcommerceService } from './ecommerce.service';

@Injectable({
  providedIn: 'root'
})
export class EcomGuard implements CanActivate {
  constructor(private ecommerceService:EcommerceService, private router:Router){}

  canActivate():boolean{
    if(this.ecommerceService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/Login'])
      return false;
    }
  }
  
}

import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { Usernavigation } from '../usernavigation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
url = Usernavigation.urls;

  ngOnInit() {

  }

  constructor(private ecommerceService: EcommerceService, private router:Router){}
  login;
  loginDetails(data){
    this.ecommerceService.loginData(data.value).subscribe(
      (response) => {
        this.login=response;
        localStorage.setItem('token',this.login.token);
        
        if(this.login.status === true){
          this.url.Home=false;
          this.url.Login=false;
          this.url.Register=false;
          this.url.Myaccount=true;
          this.url.Cart=true;
          this.url.Logout=true;
          this.url.Userhome=true;
          this.router.navigate(['/Userhome']);
        }
        else{
          alert(this.login.message);
        }

    })
  }

}

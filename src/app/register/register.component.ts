import { Component, OnInit, Input} from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private ecommerceService: EcommerceService, private router:Router){}
  register;
  registerDetails(data){
    this.ecommerceService.registerationData(data.value).subscribe(
      (response) => {
        this.register=response;
        // localStorage.setItem('token',this.register.token);
    })
  }
  navlogin(){
    this.router.navigate(['/Login']);
  }
  
}

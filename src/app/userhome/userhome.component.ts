import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router ) { }

  products;
  
  ngOnInit() {
    this.productService.userProducts().subscribe(
      (response) => {
          this.products=response;
      },
      (error) => {
        if(error instanceof HttpErrorResponse){
          if(error.status === 401){
            this.router.navigate(['/Login']);
          }
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productData:ProductService) { }

  products;
  
  ngOnInit() {
    this.productData.guestProducts().subscribe(
      (response) => {
        this.products=response;
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private productData:ProductService) { }

  ngOnInit() {
  }

  product;
  allproducts;
  
  addData(data){
    this.productData.productData(data.value).subscribe(
      (response) => {
        this.product=response;
        console.log(this.product);
      }
    )
  }
  products(){
    this.productData.allProducts().subscribe(
      (response) => {
        this.allproducts=response;
      }
    )
  }
  status;
  delete(_id) {
    console.log(_id);
    return this.productData.deleteProduct(_id).subscribe(
      res =>{
        this.status ="product deleted";
      },
      err =>{
        this.status="unable to delete product, try after sometime";
      }
    );
  }

}

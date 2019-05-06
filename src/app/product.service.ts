import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  guestProducts(){
    return this.http.get("http://localhost:9000/guestproduct");
  }

  userProducts(){
    return this.http.get("http://localhost:9000/userproduct");
  }

  productData(data){
    return this.http.post("http://localhost:9000/addProducts",data);
  }
  allProducts(){
    return this.http.get("http://localhost:9000/guestproduct");
  }

  api="http://localhost:9000/products";

  deleteProduct(_id) {
    return this.http.get(`${this.api}/delete/${_id}`);
  }

  editProduct(_id) {
    return this.http.get(`${this.api}/edit/${_id}`);
  }

  updateProduct(productId, productName, productPrice, _id) {
    var productData = {
      productId: productId,
      productName: productName,
      productPrice: productPrice
      };
    return this.http.post(`${this.api}/update/${_id}`, productData).subscribe(
      res => {
        console.log('Done')
        console.log(res);
        console.log(productData);
      });
  }

}

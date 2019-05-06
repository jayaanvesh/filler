import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  constructor(private http: HttpClient) { }
  registerationData(data){
    return this.http.post('http://localhost:9000/register',data);
  }

  loginData(data){
    return this.http.post('http://localhost:9000/login',data);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
  getToken(){
    return localStorage.getItem('token');
  }
}

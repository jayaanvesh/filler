import { Component, OnInit } from '@angular/core';
import { Usernavigation } from '../usernavigation'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
url=Usernavigation.urls;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  currentURLs=Usernavigation.urls;

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/Home'])
    this.url.Home=true;
    this.url.Login=true;
    this.url.Register=true;
    this.url.Myaccount=false;
    this.url.Cart=false;
    this.url.Logout=false;
    this.url.Userhome=false;
  }

}

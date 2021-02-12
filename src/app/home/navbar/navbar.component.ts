import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  baseurl = "https://healfit.herokuapp.com/";

  constructor() { }

  ngOnInit(): void {
  }

}

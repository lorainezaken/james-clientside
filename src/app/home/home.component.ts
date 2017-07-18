import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  
  register() {
    this.router.navigate(['./signup']);
  }

  login() {
    this.router.navigate(['./login']);
  }
}
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: []
})
export class SignupComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
        this.router.navigate(['./genre']);

  }
}
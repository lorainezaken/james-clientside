import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
  providers: []
})
export class FollowingComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
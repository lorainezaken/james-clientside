import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css'],
  providers: []
})
export class CompleteComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToStream() {
      this.router.navigate(['./stream'], { queryParams: { streamId: "5947ff8b9712383368c123f5" }});
  }
}
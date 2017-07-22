import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css'],
  providers: []
})
export class CompleteComponent implements OnInit{
  private streamId: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    	this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.streamId = params['streamId'];
      });
  }

  goToStream() {
      this.router.navigate(['./stream'], { queryParams: { streamId: this.streamId} });
  }
}
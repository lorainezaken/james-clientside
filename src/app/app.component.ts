import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from './app-rounting.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.navigate(['./home']);
  }
  
}
//  this.router.navigate(['./artist'])
// this.parentRouter = Router;
// this.parentRouter.navigateByUrl('/artist');

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: []
})
export class HomeComponent implements OnInit {
	constructor(private router: Router, private localStorage: LocalStorageService) {
	}

	ngOnInit() {
		if (this.localStorage.get('james-jwt')) {
			this.router.navigate(['./stream']);
		}
	}

	register() {
		this.router.navigate(['./signup']);
	}

	login() {
		this.router.navigate(['./login']);
	}
}
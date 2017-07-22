import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UserService } from '../user.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [UserService]
})
export class LoginComponent implements OnInit {
	public model: any = {};
	public loginError: boolean = false;

	constructor(private router: Router, private userService: UserService, private localStorage: LocalStorageService) {
	}

	ngOnInit() {
		// allready logged in
		if (this.localStorage.get('james-jwt'))
			this.router.navigate(['./stream']);
	}

	submit() {
		return this.userService.loginUser(this.model.email, this.model.password)
			.then(response => {
				this.loginError = false;
				this.localStorage.set('james-jwt', response.token);
				this.router.navigate(['./stream'], { queryParams: { streamId: response.streamId }});
			})
			.catch(err => {
				this.loginError = true;
			})
	}
}
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
// import { Pref} from "./pref";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
	constructor(private http: Http) { }

	createUser(username, email, password, profilePic, artists): Promise<any> {
		return this.http.post("http://james-server.herokuapp.com/register", {
			username,
			email,
			password,
			profilePic,
			artists
		}).toPromise()
			.then(response => {
				return response.json();
			})
			.catch(this.handleError);
	}

	loginUser(email, password): Promise<any> {
		return this.http.post("http://james-server.herokuapp.com/login", {
			email,
			password,
		}).toPromise()
			.then(response => {
				return response.json();
			})
			.catch(this.handleError);
	}

	myData(jwt): Promise<any> {
		return this.http.post(`http://james-server.herokuapp.com/me?access_token=${jwt}`, {
			
		}).toPromise()
			.then(response => {
				return response.json();
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);  // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
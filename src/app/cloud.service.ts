import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
// import { Pref} from "./pref";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CloudService {
    constructor(private http: Http) { }

    uploadImage(imagePath: File): Promise<any> {
		return new Promise((resolve, reject) => {
			let xhr:XMLHttpRequest = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			};

			xhr.open("POST", "http://james-server.herokuapp.com/uploadImage");
			xhr.setRequestHeader("cache-control", "no-cache");

			let formData = new FormData();
			formData.append("image", imagePath, imagePath.name);
			xhr.send(formData);
		});
    }
}
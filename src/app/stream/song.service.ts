import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
// import { Pref} from "./pref";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SongService {
    constructor(private http: Http) { }

    getSongs(): Promise<any[]> {
         return this.http.get("http://james-server.herokuapp.com/songs")
             .toPromise()
             .then(response => {
                 return response.json().songs
             })
             .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  // for demo purposes only
    return Promise.reject(error.message || error);
    }
}
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
// import { Pref} from "./pref";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StreamService {
    constructor(private http: Http) { }

    getSongs(streamId): Promise<string[]> {
         return this.http.get("http://james-server.herokuapp.com/stream?userId=5947ff8a9712383368c123f4")
             .toPromise()
             .then(response => {
                 return response.json().stream.songs
             })
             .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  // for demo purposes only
    return Promise.reject(error.message || error);
    }
}
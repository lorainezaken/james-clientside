import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
// import { Pref} from "./pref";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GenreService {
    constructor(private http: Http) { }

    getGenres(): Promise<string[]> {
         return this.http.get("http://james-server.herokuapp.com/FunkGenres")
             .toPromise()
             .then(response => {
                 return response.json().genres.map(genre => genre.genreTitle) as string[]
             })
             .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  // for demo purposes only
    return Promise.reject(error.message || error);
    }
}
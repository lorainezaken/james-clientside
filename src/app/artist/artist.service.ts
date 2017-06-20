import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
// import { Pref} from "./pref";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtistService {
    constructor(private http: Http) { }

    getArtists(genres: string[]): Promise<string[]> {
         return this.http.get("http://james-server.herokuapp.com/funkGenresArtists?genreIds=5945705f007535073863da1b,594574ad3536f62924e10fc0")
             .toPromise()
             .then(response => {
                 return response.json().artists.map(artist => artist.artistName) as string[]
             })
             .catch(this.handleError);
    }

    addArtistsSongsToStream(artistIds: string[]): Promise<string> {
        return this.http.post("http://james-server.herokuapp.com/stream/5947ff8b9712383368c123f5/songs?songIds=594806766651ba37b82438dd", {})
            .toPromise()
            .then(response => {
                return "asasd";
            })
    }
    
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  // for demo purposes only
    return Promise.reject(error.message || error);
    }
}
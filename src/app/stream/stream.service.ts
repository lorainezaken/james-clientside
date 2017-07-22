import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { PlaylistBox } from '../streamContainer/playlist-box.model';
import { LocalStorageService } from 'angular-2-local-storage';
// import { Pref} from "./pref";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StreamService {
    constructor(private http: Http, private localStorage: LocalStorageService) { }

    getSongs(streamId): Promise<string[]> {
        return this.http.get("http://james-server.herokuapp.com/stream?userId=5947ff8a9712383368c123f4")
            .toPromise()
            .then(response => {
                return response.json().stream.songs
            })
            .catch(this.handleError);
    }

    addSongToStream(streamId, songId): Promise<any> {
        return this.http.post(`http://james-server.herokuapp.com/stream/${streamId}/songs?songIds=${songId}`, {})
            .toPromise()
            .then(response => {
                return "ok";
            })
    }

    getStreams(): Promise<PlaylistBox[]> {
        let token = this.localStorage.get('james-jwt');
        return this.http.get(`http://james-server.herokuapp.com/streams?access_token=${token}`)
            .toPromise()
            .then(response => {
                return response.json() as PlaylistBox[]
            })
            .catch(this.handleError);
    }

    getFollowedStreams(): Promise<PlaylistBox[]> {
        let token = this.localStorage.get('james-jwt');
        return this.http.get(`http://james-server.herokuapp.com/followedStreams?access_token=${token}`)
            .toPromise()
            .then(response => {
                return response.json() as PlaylistBox[]
            })
            .catch(this.handleError);
    }

    followStream(streamId): Promise<any> {
        let token = this.localStorage.get('james-jwt');
        return this.http.post(`http://james-server.herokuapp.com/followStream?access_token=${token}`, {
            streamId
        })
            .toPromise()
            .then(response => {
                return response.json() as any
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);  // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
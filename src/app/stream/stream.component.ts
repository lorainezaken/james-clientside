import { Component, OnInit } from '@angular/core';
import { StreamService } from './stream.service';
import { SongService } from './song.service';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
	selector: 'app-stream',
	templateUrl: './stream.component.html',
	styleUrls: ['./stream.component.css'],
	providers: [StreamService, SongService, UserService]
})
export class StreamComponent implements OnInit {

	constructor(private streamService: StreamService, private songService: SongService, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private localStorage: LocalStorageService) {
		this.playlistSongs = [];
	}

	streamSongs: any[]
	playlistSongs: any[]
	streamId: string

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params: Params) => {
			let streamIdPromise = Promise.resolve(params['streamId']);

			if (this.streamId == undefined) {
				if (this.localStorage.get('james-jwt')) {
					 streamIdPromise = this.userService.myData(this.localStorage.get('james-jwt'))
					  	.then(res => res.streamId);
				} else {
					// should login first
					this.router.navigate(['./home']);
				}
			}

			return streamIdPromise
				.then(streamId => {
					this.streamId = streamId;
					
					return this.streamService.getSongs(this.streamId)
				})
				.then(songs => {
					this.streamSongs = songs;
				})
		})

		this.songService.getSongs()
			.then(songs => {
				this.playlistSongs.push(...songs);
			})
	}

	addSongToStream(song) {
		return this.streamService.addSongToStream(this.streamId, song.id)
			.then(() => {
				this.streamSongs.push(song);
			})
	}
}

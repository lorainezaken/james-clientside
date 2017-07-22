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
		this.streamSongs = [];
	}

	streamSongs: any[];
	currentSong: any = {};
	streamId: string;
	songs: any[];
	player: YT.Player;
	volume: number;
	currentIndex: number = 0;
	username: any;

	savePlayer(player) {
		this.player = player;
		this.player.loadVideoById(this.currentSong.songFileUrl);
		console.log('player instance', player)
	}

	onStateChange(event) {
		console.log('player state', event.data);
	}

	ngOnInit() {
		 this.userService.myData(this.localStorage.get('james-jwt'))
			.then(res => res.username)
			.then(res => this.username = res);
									
		this.activatedRoute.queryParams.subscribe((params: Params) => {
			let streamIdPromise = Promise.resolve(params['streamId']);

			if (params['streamId'] == undefined) {
				if (this.localStorage.get('james-jwt')) {
<<<<<<< HEAD
					 streamIdPromise = this.userService.myData(this.localStorage.get('james-jwt'))
							.then(res => res.streamId);
=======
					streamIdPromise = this.userService.myData(this.localStorage.get('james-jwt'))
						.then(res => res.streamId);
>>>>>>> e10fc62b74fb4b7a14227268170a7dfa4e3f927f
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
				this.streamSongs = songs;
				this.currentSong = this.streamSongs[0];

				if (!this.currentSong.albumCoverUrl) {
					this.currentSong.albumCoverUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
				}
				this.currentIndex = 0;
			})
	}

	addSongToStream(song) {
		return this.streamService.addSongToStream(this.streamId, song.id)
			.then(() => {
				this.streamSongs.push(song);
			})
	}

	previousSong() {
		if (this.streamSongs[this.currentIndex - 1] !== undefined) {
			this.currentSong = this.streamSongs[--this.currentIndex];
			if (!this.currentSong.albumCoverUrl) {
				this.currentSong.albumCoverUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
			}
			this.player.loadVideoById(this.currentSong.songFileUrl);
		}
	}

<<<<<<< HEAD
  nextSong(){
    if (this.streamSongs[this.currentIndex + 1] !== undefined)
      {
    this.currentSong = this.streamSongs[++this.currentIndex];
    this.player.loadVideoById(this.currentSong.songFileUrl);
      }
	}
		
	signout(){
			this.localStorage.set('james-jwt', null);
	    this.router.navigate(['./home']);
=======
	nextSong() {
		if (this.streamSongs[this.currentIndex + 1] !== undefined) {
			this.currentSong = this.streamSongs[++this.currentIndex];
			if (!this.currentSong.albumCoverUrl) {
				this.currentSong.albumCoverUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
			}
			this.player.loadVideoById(this.currentSong.songFileUrl);
		}
>>>>>>> e10fc62b74fb4b7a14227268170a7dfa4e3f927f
	}
}

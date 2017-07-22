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

	savePlayer(player) {
		this.player = player;
		this.player.loadVideoById(this.currentSong.songFileUrl);
		console.log('player instance', player)
	}

	onStateChange(event) {
		console.log('player state', event.data);
	}

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params: Params) => {
			let userDataPromise: Promise<any> = Promise.reject({});

			if (this.localStorage.get('james-jwt')) {
				userDataPromise = this.userService.myData(this.localStorage.get('james-jwt'))
			} else {
				// should login first
				this.router.navigate(['./home']);
			}

			return userDataPromise
				.then(userData => {
					this.streamId = userData.streamId;

					return this.streamService.getSongs(userData.id)
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

	nextSong() {
		if (this.streamSongs[this.currentIndex + 1] !== undefined) {
			this.currentSong = this.streamSongs[++this.currentIndex];
			if (!this.currentSong.albumCoverUrl) {
				this.currentSong.albumCoverUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
			}
			this.player.loadVideoById(this.currentSong.songFileUrl);
		}
	}
}

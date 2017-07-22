import { Component, OnInit } from '@angular/core';
import { StreamService } from './stream.service';
import {SongService} from './song.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
  providers: [ StreamService, SongService ]
})
export class StreamComponent implements OnInit {

  constructor(private streamService: StreamService, private songService: SongService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentSong = {};
  }

  streamSongs: any[];
  currentSong: any;
  streamId: string;
  songs : any[];
  player: YT.Player;
  volume: number;
  currentIndex: number = 0;

  savePlayer (player) {
    this.player = player;
    this.player.loadVideoById(this.currentSong.songFileUrl);
    console.log('player instance', player)
  }

  onStateChange(event){
    console.log('player state', event.data);
  }

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.streamId = params['streamId'];

        this.streamService.getSongs(this.streamId)
          .then(songs => {
            this.streamSongs = songs;
            this.currentSong = this.streamSongs[0];
            this.currentIndex = 0;
          });
      })
  }

  addSongToStream(song) {
    return this.streamService.addSongToStream(this.streamId, song.id)
      .then(() => {
        this.streamSongs.push(song);
      })
  }

  previousSong(){
    if (this.streamSongs[this.currentIndex - 1] !== undefined)
      {
    this.currentSong = this.streamSongs[--this.currentIndex];
    this.player.loadVideoById(this.currentSong.songFileUrl);
      }
  }

  nextSong(){
    if (this.streamSongs[this.currentIndex + 1] !== undefined)
      {
    this.currentSong = this.streamSongs[++this.currentIndex];
    this.player.loadVideoById(this.currentSong.songFileUrl);
      }
  }
}

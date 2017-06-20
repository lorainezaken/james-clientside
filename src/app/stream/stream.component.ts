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
    this.playlistSongs = [];
  }

  streamSongs: any[]
  playlistSongs: any[]
  streamId: string

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.streamId = params['streamId'];

        this.streamService.getSongs(this.streamId)
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

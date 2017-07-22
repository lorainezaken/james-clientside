import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../stream/song.service';
import { StreamService } from '../stream/stream.service';
import { UserService } from '../user.service';
import { Song } from '../songs/songData.model';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  providers: [SongService]
})
export class SongsComponent implements OnInit {
  public songs: Song[] = [];
  public isLoading: boolean = true;

  constructor(private router: Router, private songService: SongService, private streamService: StreamService, private userService:UserService, private localStorage: LocalStorageService) {
  }

  ngOnInit() {
    this.songService.getSongs()
      .then(songs => {
        this.isLoading = false;
        this.songs.push(...songs.map(song => {
          if (!song.albumCoverUrl) {
            song.albumCoverUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
          }
          return song;
        }));
      })
  }

  add(song) {
    this.userService.myData(this.localStorage.get('james-jwt'))
      .then(res => {
          this.streamService.addSongToStream(res.streamId, song.id);
      });
  }
}
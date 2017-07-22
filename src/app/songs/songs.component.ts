import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../stream/song.service';
import { Song } from '../songs/songData.model';

@Component({
  selector: 'songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  providers: [SongService]
})
export class SongsComponent implements OnInit {
  public songs: Song[] = [];
  public isLoading: boolean = true;

  constructor(private router: Router, private songService: SongService) {
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
}
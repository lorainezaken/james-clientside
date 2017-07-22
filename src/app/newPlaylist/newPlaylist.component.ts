import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistBox } from '../streamContainer/playlist-box.model';
import { StreamService } from '../stream/stream.service';
@Component({
  selector: 'newPlaylist',
  templateUrl: './newPlaylist.component.html',
  styleUrls: ['./newPlaylist.component.css'],
  providers: [StreamService]
})
export class NewPlaylistComponent implements OnInit {
  public playlists: PlaylistBox[] = [];
  public isLoading: boolean = true;

  constructor(private router: Router, private streamService: StreamService) {
  }

  ngOnInit() {
    this.streamService.getStreams()
      .then(playlists => {
        this.isLoading = false;
        this.playlists.push(...playlists);
      })
  }
}
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistBox } from '../streamContainer/playlist-box.model';
import { StreamService } from '../stream/stream.service';

@Component({
  selector: 'following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
  providers: []
})
export class FollowingComponent implements OnInit{
  public playlists: PlaylistBox[] = [];
  public isLoading: boolean = true;

  constructor(private router: Router, private streamService: StreamService) {
  }

  ngOnInit() {
    this.streamService.getFollowedStreams()
      .then(playlists => {
        this.isLoading = false;
        this.playlists.push(...playlists);
      })
  }
}
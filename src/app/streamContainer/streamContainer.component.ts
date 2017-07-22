import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistBox } from './playlist-box.model';
import { StreamService } from '../stream/stream.service';

@Component({
  selector: 'streamContainer',
  templateUrl: './streamContainer.component.html',
  styleUrls: ['./streamContainer.component.css'],
  providers: []
})
export class StreamContainerComponent implements OnInit{
  @Input() public stream: PlaylistBox;

  constructor(private router: Router, private streamService: StreamService) {
  }

  ngOnInit() {
  }

  follow(stream) {
    this.streamService.followStream(stream.streamId);
  }
}
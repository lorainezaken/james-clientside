import { Component, OnInit } from '@angular/core';
import { StreamService } from './stream.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
  providers: [ StreamService ]
})
export class StreamComponent implements OnInit {

  constructor(private streamService: StreamService, private router: Router, private activatedRoute: ActivatedRoute) {}

  streamSongs: any[]

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        let streamId = params['streamId'];

        this.streamService.getSongs(streamId)
          .then(songs => {
            this.streamSongs = songs;
          })
      })
  }

}

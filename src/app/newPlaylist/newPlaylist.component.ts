import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'newPlaylist',
  templateUrl: './newPlaylist.component.html',
  styleUrls: ['./newPlaylist.component.css'],
  providers: []
})
export class NewPlaylistComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
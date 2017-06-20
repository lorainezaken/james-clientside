import { Component } from '@angular/core';
import { ArtistService } from './artist.service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppRoutingModule } from '../app-rounting.module';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
   providers: [ArtistService]
})
export class ArtistComponent implements OnInit {
   constructor(private artistService: ArtistService, private router: Router, private activatedRoute: ActivatedRoute) {
     this.selectedArtists = [];
   }
  artists: string[]
  selectedArtists: string[]


  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        let genres = params['genres'].split(',');

        this.artistService.getArtists(genres)
          .then(artists => {
            this.artists = artists;
          })
      })
  }

  onArtistClick(artist) {
    if (this.selectedArtists.includes(artist))
        this.selectedArtists = this.selectedArtists.filter(sArtist => sArtist !== artist);
    else
        this.selectedArtists.push(artist);
  }

  goToStream() {
    this.artistService.addArtistsSongsToStream(this.selectedArtists)
      .then(() => {
        this.router.navigate(['./stream'], { queryParams: { streamId: "5947ff8b9712383368c123f5" }});
      })
  }
}

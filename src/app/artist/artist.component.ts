import { Component } from '@angular/core';
import { ArtistService } from './artist.service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppRoutingModule } from '../app-rounting.module';
import { LocalStorageService } from 'angular-2-local-storage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
   providers: [ArtistService, UserService]
})
export class ArtistComponent implements OnInit {
   constructor(private artistService: ArtistService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private localStorge: LocalStorageService) {
     this.selectedArtists = [];
   }
  artists: any[]
  selectedArtists: any[]


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

  gotoGenres() {
    this.router.navigate(['./genre']);
  }

  Submit() {
    let signupData : any = this.localStorge.get('signupData');
    signupData = signupData.user;
    return this.userService.createUser(signupData.username, signupData.email, signupData.password, signupData.profilePic, this.selectedArtists.map(a => a.artistId))
      .then(response => {
        this.localStorge.set('james-jwt', response.token);
        this.router.navigate(['./complete'], { queryParams: { streamId: response.streamId }});
      })
  }
}
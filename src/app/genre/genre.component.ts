import { Component } from '@angular/core';
import { GenreService } from '../genre.service';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
  providers: [GenreService]
})
export class GenreComponent implements OnInit{
  constructor(private genreService: GenreService,
              private router: Router) {
      this.selectedGenres = [];
  }
  
  genres: string[]
  selectedGenres: string[]

  ngOnInit() {
    this.genreService.getGenres()
      .then(genres => {
        this.genres = genres;
      })
  }

  onGenreClick(genre) {
    if (this.selectedGenres.includes(genre))
        this.selectedGenres = this.selectedGenres.filter(sGenre => sGenre !== genre);
    else
        this.selectedGenres.push(genre);
  }

  gotoSignup() {
    this.router.navigate(['./signup']);
  }

  getArtists() {
    this.router.navigate(['./artist'], { queryParams: { genres: this.selectedGenres.join(',') }});
  }
  
}
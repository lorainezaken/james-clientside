import { Component } from '@angular/core';
import { GenreService } from './genre.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GenreService]
})
export class AppComponent implements OnInit{
  constructor(private genreService: GenreService) {}
  
  genres: string[]
  ngOnInit() {
    this.genreService.getGenres()
      .then(genres => {
        this.genres = genres;
      })
  }
}

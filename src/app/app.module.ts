import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { StreamComponent } from './stream/stream.component';
import {GenreComponent} from './genre/genre.component';
import {RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    StreamComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { StreamComponent } from './stream/stream.component';
import {GenreComponent} from './genre/genre.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';

import {RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    StreamComponent,
    GenreComponent,
    HomeComponent,
    SignupComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { StreamComponent } from './stream/stream.component';
import {GenreComponent} from './genre/genre.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {CompleteComponent} from './complete/complete.component';
import {SongsComponent} from './songs/songs.component';
import { NewPlaylistComponent } from './newPlaylist/newPlaylist.component';
import { FollowingComponent } from './following/following.component';
import { StreamContainerComponent } from './streamContainer/streamContainer.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
<<<<<<< HEAD

=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
>>>>>>> 10a47f35f5dc6ca131ff096cb9fdccaa52565e68
import { LocalStorageModule } from 'angular-2-local-storage';
import {RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-rounting.module';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    StreamComponent,
    GenreComponent,
    HomeComponent,
    SignupComponent,
    SongsComponent,
    LoginComponent,
    StreamContainerComponent,
    CompleteComponent,
    NewPlaylistComponent,
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    YoutubePlayerModule ,
    CommonModule,
    FormsModule,
    LocalStorageModule.withConfig({
        prefix: 'james',
        storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent, StreamComponent]
})
export class AppModule { }
enableProdMode();
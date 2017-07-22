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
import {LoginComponent} from './login/login.component';
import {CompleteComponent} from './complete/complete.component';
import { NewPlaylistComponent } from './newPlaylist/newPlaylist.component';
import { FollowingComponent } from './following/following.component';
import { StreamContainerComponent } from './streamContainer/streamContainer.component';


import { LocalStorageModule } from 'angular-2-local-storage';
import {RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    StreamComponent,
    GenreComponent,
    HomeComponent,
    SignupComponent,
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
    FormsModule,
    LocalStorageModule.withConfig({
        prefix: 'james',
        storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

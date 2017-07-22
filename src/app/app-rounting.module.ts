import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { ArtistComponent } from './artist/artist.component';
import { StreamComponent } from './stream/stream.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CompleteComponent } from './complete/complete.component';
import { NewPlaylistComponent } from './newPlaylist/newPlaylist.component';
import { FollowingComponent } from './following/following.component';

const appRoutes: Routes =[
    { path: '', redirectTo: '/index.html', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'genre', component: GenreComponent },
    { path: 'artist', component: ArtistComponent },
    { path: 'stream', component: StreamComponent, children : [
        { path: '', component: NewPlaylistComponent},
        { path: 'newPlaylist', component: NewPlaylistComponent},
        { path: 'following', component: FollowingComponent}
    ]  },
    { path: 'complete', component: CompleteComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
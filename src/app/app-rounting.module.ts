import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { ArtistComponent } from './artist/artist.component';
import { StreamComponent } from './stream/stream.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CompleteComponent } from './complete/complete.component';

const appRoutes: Routes =[
    { path: '', redirectTo: '/index', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'genre', component: GenreComponent },
    { path: 'artist', component: ArtistComponent },
    { path: 'stream', component: StreamComponent },
    { path: 'complete', component: CompleteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
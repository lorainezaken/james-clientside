import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { ArtistComponent } from './artist/artist.component';
import { StreamComponent } from './stream/stream.component';
import { GenreComponent } from './genre/genre.component';

const appRoutes: Routes =[
    { path: '', redirectTo: '/index', pathMatch:'full'},
    { path: 'genre', component: GenreComponent },
    { path: 'artist', component: ArtistComponent },
    { path: 'stream', component: StreamComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
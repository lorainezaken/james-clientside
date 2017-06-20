import { Routes, RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
// import { RegisterComponent } from './register/index';
// import { AuthGuard } from './authGuard/auth.guard';
 
const appRoutes: Routes = [
    // { path: '', component: AppComponent, canActivate: [AuthGuard] },
 
    // otherwise redirect to home
    { path: '**', redirectTo: 'http://james-server.herokuapp.com/FunkGenres' }
];
export const routing = RouterModule.forRoot(appRoutes);
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MovieListComponent } from './Controller/movie-list/movie-list.component';
import { AppComponent } from './app.component';

import { MovieService } from './Api/movie.service';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './Controller/movie-details/movie-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies',  component: MovieListComponent },
  { path: 'detail/:id', component: MovieDetailsComponent }
]

@NgModule({
  declarations: [
    MovieListComponent,
    AppComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

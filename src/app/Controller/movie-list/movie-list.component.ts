import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../Api/movie.service';

@Component({
  //selector: 'app-movie-list', 
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : any = {};

  constructor(private _movieService : MovieService) {}

  ngOnInit() : void {
    this
      ._movieService
      .getMovies()
      .subscribe(moves => this.movies = moves.films); // {console.log(moves.films)}); //this.movies = movies;
  }

}

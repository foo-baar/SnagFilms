import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../Api/movie.service';
import {Console} from '@angular/core/src/console';
import {ActivatedRoute, Params} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';


@Component({selector: 'app-movie-details', templateUrl: './movie-details.component.html', styleUrls: ['./movie-details.component.css']})
export class MovieDetailsComponent implements OnInit {
  id : string;
  movie : any = {};

  constructor(private route : ActivatedRoute, private _movieService : MovieService, public sanitizer: DomSanitizer, private Location: Location) {
    this
      .route
      .params
      .subscribe(p => this.id = p['id']);
  }
  ngOnInit() : void {
    this
      ._movieService
      .getMovies()
      .subscribe(moves => this.filterResult(moves.films));
  }
  filterResult(movies) {
    this.movie = movies
      .film
      .filter((x) => x.id === this.id);
  }
  goBack(): void {
    this.Location.back();
  }
  videoURL(){
    return 'http://staging.snagfilms.com/embed/player?filmId='+this.id;
  }
}

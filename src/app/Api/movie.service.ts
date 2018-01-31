import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/filter';

@Injectable()
export class MovieService {

  private movieApi = 'http://www.snagfilms.com/apis/films.json?limit=20';
  movieData: any = {};

  constructor(private http: Http) { 
      
  }
  getMovies(){
    //console.log('called');
    
   return this.http.get(this.movieApi)
      .map((res: Response) => res.json());
      // .subscribe(d => {
      //   console.log(d.films.film);
      // }) .filter(rec => rec.films.film.id == )
  }//id:string
}

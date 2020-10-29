import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=03c4101c910c34a08c2ff166f802654c';
   upComingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=03c4101c910c34a08c2ff166f802654c';

  constructor(private http: HttpClient) { }

  getTopRatedMovies(){
    return this.http.get(this.topRatedUrl);
  }

  getUpComingMovies(){
    return this.http.get(this.upComingUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  list: any;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getTopRatedMovies().subscribe((data: any) => {
      console.log('Display Top Rated Data', data);
      this.list = data.results;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-up-coming-movies',
  templateUrl: './up-coming-movies.component.html',
  styleUrls: ['./up-coming-movies.component.css']
})
export class UpComingMoviesComponent implements OnInit {
  list: any;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getUpComingMovies().subscribe((data: any) => {
      console.log('Display Up Coming Data', data);
      this.list = data.results;
    });
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpComingMoviesComponent } from './up-coming-movies/up-coming-movies.component';


const routes: Routes = [
  { path: 'topRated', component: TopRatedMoviesComponent},
  { path: 'upComing', component: UpComingMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

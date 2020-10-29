import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpComingMoviesComponent } from './up-coming-movies/up-coming-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    TopRatedMoviesComponent,
    UpComingMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

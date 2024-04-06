import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieDetail } from '../interfaces/movie-detail';
import { environment } from '../../environments/environment.development';

const imgURL = environment.imgURL;
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  private movieService = inject(MovieService);
  movies: MovieDetail[] = [];

  ngOnInit(): void {
    this.loadMovies();
  }
  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (movies: any) => {
        this.movies = movies.results as MovieDetail[];
        console.log(movies.results);
      },
      error: (error: any) => console.log('Error fetching movies ', error),
    });
  }
  getImageURL(posterPath: string) {
    return imgURL + posterPath;
  }
}

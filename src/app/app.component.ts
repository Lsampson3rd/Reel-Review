import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, CommonModule, MovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reel-review';
}

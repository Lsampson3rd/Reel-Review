import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  constructor() {}

  getMovies() {
    return this.http.get(`${apiUrl}?api_key=${apiKey}`);
  }
}

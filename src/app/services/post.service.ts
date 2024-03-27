import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
@Injectable({
  providedIn: 'root'
})
export class PostService {
private http = inject(HttpClient);
  constructor() { }
  getPosts(){
    return this.http.get(baseUrl);
  }
}

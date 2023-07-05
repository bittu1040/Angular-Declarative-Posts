import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get<{[id: string]: IPost}>('https://angular-rxjs-posts-d8d31-default-rtdb.firebaseio.com/posts.json')
  }
}

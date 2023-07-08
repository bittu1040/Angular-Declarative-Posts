import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../models/IPost';
import { map, mergeMap } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private categoryService: CategoryService) { }

  getPost() {
    return this.http.get<{ [id: string]: IPost }>
    ('https://angular-rxjs-posts-d8d31-default-rtdb.firebaseio.com/posts.json')
    .pipe(map((posts)=>{
      let postData: IPost[]=[];
      for(let id in posts){
        postData.push(posts[id]);
      }
      return postData;
    }))
  }

}

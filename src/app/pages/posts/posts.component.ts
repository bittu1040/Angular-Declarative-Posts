import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/models/IPost';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  posts: IPost[]=[];
  postSubscription: Subscription | undefined;
  constructor(private postService: PostService, private categoriesService: CategoryService){

  }

  ngOnInit(){
   this.postSubscription= this.postService.getPost().subscribe((data)=>{
      console.log("data in post component", data);
      this.posts= data;
    })

    this.categoriesService.getCategories().subscribe((data)=>{
      console.log("categories data", data)
    })
  }

  ngOnDestroy(){
    this.postSubscription?this.postSubscription.unsubscribe(): null; 
  }

}

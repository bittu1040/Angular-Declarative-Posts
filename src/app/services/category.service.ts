import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/Icategory';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<{[id: string]: ICategory}>('https://angular-rxjs-posts-d8d31-default-rtdb.firebaseio.com/categories.json')
    .pipe(map((categories)=>{
      let categoriesData: ICategory[]=[];
      for(let id in categories){
        categoriesData.push(categories[id]);
      }
      return categoriesData;
    }))
  }  
}

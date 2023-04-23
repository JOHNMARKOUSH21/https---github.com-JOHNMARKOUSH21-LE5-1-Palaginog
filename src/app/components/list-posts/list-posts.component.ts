import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import type { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})

export class ListPostsComponent {

 // constructor(private http: HttpClient){ }
  posts?: Post[] = [];


  constructor(private http: HttpClient){ }
  ngOnInit(): void{
    this.initData();
  }

  initData(): void{
    this.http.get<Post[]>('https://localhost:7125/api/Post/listPosts')
    .subscribe({
      next:(data: Post[]) => {
        this.posts = data;
        console.log(this.posts);
      }
    })
  }
  
}



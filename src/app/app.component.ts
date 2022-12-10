import { Component, OnInit } from '@angular/core';
import { PostInterface } from './interfaces/post-interface';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: PostInterface[] | undefined;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.all()
      .subscribe((response: PostInterface[]) => {
        this.posts = response;
      })  
  }
}

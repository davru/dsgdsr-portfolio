import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../../interfaces/blog';
import posts from '../../../../assets/data/posts.json';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  public posts: BlogPost[] = [];

  constructor() {}

  ngOnInit(): void {
    this.posts = posts as BlogPost[];
  }
}

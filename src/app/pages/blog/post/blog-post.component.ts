import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../../interfaces/blog';
import posts from '../../../../assets/data/posts.json';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  public post: BlogPost;
  public body: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params) => {
      this.post = (posts as BlogPost[]).find(
        (post) => post.slug === params.slug
      );
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../../../interfaces/blog';
import posts from '../../../../assets/data/posts.json';
import { Meta } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
    public post: BlogPost;
    public body: string;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly meta: Meta
    ) {}

    async ngOnInit(): Promise<void> {
        this.activatedRoute.params.subscribe(async (params) => {
            this.setPost(params.slug);
        });
    }

    private setPost(slug: string): void {
        this.post = (posts as BlogPost[]).find((post) => post.slug === slug);
        if (!this.post) {
            this.router.navigate(['/']); // TODO not found
        } else {
            this.setMeta();
        }
    }

    private setMeta(): void {
        const tags = Object.keys(this.post.meta).map((tag) => {
            return {
                property: tag,
                content: this.post.meta[tag],
            };
        });

        this.meta.addTags(tags);
    }
}

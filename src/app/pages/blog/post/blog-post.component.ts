import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../../interfaces/blog';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
    public post: BlogPost;

    constructor(
        private readonly supabaseService: SupabaseService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.supabaseService.getPost(params.slug).then(post => {
                this.post = post.data;
            });
        });
    }
}

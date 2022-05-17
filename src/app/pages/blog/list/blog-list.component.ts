import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../../interfaces/blog';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
    public posts: BlogPost[] = [];

    constructor(private readonly supabaseService: SupabaseService) {}

    ngOnInit(): void {
        if (this.supabaseService.posts?.length) {
            this.posts = this.supabaseService.posts;
        } else {
            this.supabaseService.getPosts().then(posts => {
                this.posts = posts.data;
                this.supabaseService.posts = this.posts;
            });
        }
    }
}

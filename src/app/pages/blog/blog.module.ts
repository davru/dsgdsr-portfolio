import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './list/blog-list.component';
import { RouterModule } from '@angular/router';
import { TagListModule } from '../../components/tag-list/tag-list.module';
import { BlogPostComponent } from './post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
    declarations: [
        BlogListComponent,
        BlogPostComponent
    ],
    imports: [
        CommonModule,

        // Components
        TagListModule,
        MarkdownModule.forRoot(),

        // Routing
        RouterModule.forChild([
            { path: '', component: BlogListComponent },
            { path: ':slug', component: BlogPostComponent }
        ])
    ]
})
export class BlogModule {}

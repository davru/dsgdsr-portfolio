import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './list/blog-list.component';
import { RouterModule } from '@angular/router';
import { TagListComponent } from '../../components/tag-list/tag-list.component';
import { BlogPostComponent } from './post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ErrorPageComponent } from '../../components/error/error.component';
import { BlogPostResolver } from './post/blog-post.resolver';
import { PostService } from '../../services/post.service';
import { RelativeTimePipe } from '../../pipes/relativeTime.pipe';
import { ClipboardButtonComponent } from '../../components/clipboard-button/clipboard-button.component';

@NgModule({
    declarations: [
        BlogListComponent,
        BlogPostComponent,
        RelativeTimePipe,
        ClipboardButtonComponent,
    ],
    imports: [
        CommonModule,

        // Components
        TagListComponent,
        ProgressBarComponent,
        ErrorPageComponent,
        MarkdownModule.forRoot(),

        // Routing
        RouterModule.forChild([
            { path: '', component: BlogListComponent },
            {
                path: ':slug',
                component: BlogPostComponent,
                resolve: {
                    markdown: BlogPostResolver
                }
            },
        ]),
    ],
    providers: [PostService]
})
export class BlogModule {}

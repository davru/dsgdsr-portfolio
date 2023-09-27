import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../../interfaces/blog';
import posts from '../../../../assets/data/posts.json';
import { Meta } from '@angular/platform-browser';
import { ClipboardButtonComponent } from '../../../components/clipboard-button/clipboard-button.component';
import { Locales, TranslationService } from '../../../services/translation.service';
// import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
    public post: BlogPost;
    public markdown: string;
    public locale: Locales;
    readonly clipboardButton = ClipboardButtonComponent;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly meta: Meta,
        translationService: TranslationService,
    ) {
        this.locale = translationService.getLocale();
    }

    async ngOnInit(): Promise<void> {
        this.activatedRoute.params.subscribe(async (params) => {
            this.setPost(params.slug);
        });
        this.activatedRoute.data.subscribe((params) => {
            // TODO: no params
            this.markdown = params?.markdown
        })
    }

    private setPost(slug: string): void {
        this.post = (posts as BlogPost[]).find((post) => post.slug === slug);
        if (this.post) {
            this.setMeta();
        }
    }

    private setMeta(): void {
        this.meta.addTags([
            ...this.post.meta,
            {
                name: 'description',
                content: `DSGDSR Blog - ${this.post.summary}`,
            },
            {
                property: 'og:description',
                content: this.post.summary[this.locale],
            },
            {
                name: 'twitter:description',
                content: this.post.summary[this.locale],
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                property: 'twitter:domain',
                content: 'dsgdsr.me',
            },
            {
                name: 'twitter:title',
                content: `${this.post.title[this.locale]} - DSGDSR blog`
            },
            {
                property: 'og:title',
                content: `${this.post.title[this.locale]} - DSGDSR blog`
            },
        ]);
    }
}

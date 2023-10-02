import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import posts from '../../assets/data/posts.json';
import { BlogPost } from '../interfaces/blog';
import { Locales, TranslationService } from './translation.service';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(
        private httpClient: HttpClient,
        private translateService: TranslationService
    ) {}

    public getPost(slug: string, lang: Locales = this.translateService.getLocale()): Observable<string> {
        const post = (posts as BlogPost[]).find((post) => post.slug === slug);
        if (post) {
            const filename = `${post.id}.${slug}.md`;
            return this.httpClient.get(`/assets/data/posts/${lang}/${filename}`, { responseType: 'text' });
        } else {
            return of('404')
        }
    }
}

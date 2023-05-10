import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import posts from '../../assets/data/posts.json';
import { BlogPost } from '../interfaces/blog';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(private httpClient: HttpClient) {}

    public getPost(slug: string): Observable<string> {
        const isFound = (posts as BlogPost[]).find((post) => post.slug === slug);
        if (isFound) {
            return this.httpClient.get('/assets/data/posts/' + slug + '.md', {
                responseType: 'text'
            });
        } else {
            return of('404')
        }
    }
}
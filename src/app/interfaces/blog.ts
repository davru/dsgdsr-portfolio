import { MetaDefinition } from '@angular/platform-browser';

export interface BlogPost {
    title: string;
    slug: string;
    body: string;
    summary: string;
    tags: string[];
    meta: MetaDefinition[];
}

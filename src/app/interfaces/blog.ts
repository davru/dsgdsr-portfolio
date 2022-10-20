import { MetaDefinition } from '@angular/platform-browser';

export interface BlogPost {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    meta: MetaDefinition[];
}

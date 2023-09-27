import { MetaDefinition } from '@angular/platform-browser';
import { LocalizedString } from './locale';

export interface BlogPost {
    id: string;
    title: LocalizedString;
    slug: string;
    summary: LocalizedString;
    tags: string[];
    meta: MetaDefinition[];
}

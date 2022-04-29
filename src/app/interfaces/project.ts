import { SafeUrl } from '@angular/platform-browser';

export interface Project {
    name: string;
    slug: string;
    description?: string;
    url?: string;
    tags: string[];
    links?: ProjectLink[];
    image_url: string;
    featured_image?: SafeUrl;
    index?: number;
}

export interface ProjectImage {
    data: Blob;
    error: Error;
}

export interface ProjectLink {
    icon: ProjectLinkIcon;
    url: string;
}

export enum ProjectLinkIcon {
    Github = 'github',
    Codepen = 'codepen',
    External = 'external-link'
}

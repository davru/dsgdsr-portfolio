export interface Project {
    name: string;
    slug: string;
    featured_image: string;
    description: string;
    tags: string[];
    links: ProjectLink[];
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

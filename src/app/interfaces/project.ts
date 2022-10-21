export interface Project {
    name: string;
    slug: string;
    description?: string;
    url?: string;
    tags: string[];
    links?: ProjectLink[];
    image_name: string;
    index?: number;
}

export interface ProjectLink {
    icon: ProjectLinkIcon;
    url: string;
}

export enum ProjectLinkIcon {
    Github = 'github',
    Codepen = 'codepen',
    External = 'external-link',
}

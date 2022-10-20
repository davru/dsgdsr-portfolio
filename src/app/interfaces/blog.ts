export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  meta: BlogMeta;
}

export interface BlogMeta {
  description: string;
}

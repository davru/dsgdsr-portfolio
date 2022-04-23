import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  createClient,
  PostgrestSingleResponse,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Project, ProjectImage } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private sanitizer: DomSanitizer) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  public getProjects(): PromiseLike<PostgrestSingleResponse<Project[]>> {
    return this.supabase.from('projects').select('*');
  }

  public getPosts(): PromiseLike<PostgrestSingleResponse<any[]>> {
    return this.supabase.from('posts').select('*');
  }

  public getPost(slug: string): PromiseLike<PostgrestSingleResponse<any>> {
    return this.supabase.from('posts').select('*').eq('slug', slug).single();
  }

  public downloadImage(bucket: string, path: string): Promise<ProjectImage> {
    return this.supabase.storage.from(bucket).download(path);
  }

  public sanitizeUrl(imageUrl: Blob): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageUrl));
  }
}

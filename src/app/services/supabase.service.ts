import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  createClient,
  PostgrestSingleResponse,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { BlogPost } from '../interfaces/blog';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  private _posts: BlogPost[];
  public set posts(p: BlogPost[]) {
    this._posts = p;
  }
  public get posts(): BlogPost[] {
    return this._posts;
  }

  constructor(private sanitizer: DomSanitizer) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods':
            'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,TRACE,CONNECT',
        },
      }
    );
  }

  public getPosts(): PromiseLike<PostgrestSingleResponse<BlogPost[]>> {
    return this.supabase.from('posts').select('*');
  }

  public getPost(slug: string): PromiseLike<PostgrestSingleResponse<BlogPost>> {
    return this.supabase.from('posts').select('*').eq('slug', slug).single();
  }

  public sanitizeUrl(imageUrl: Blob): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageUrl));
  }
}

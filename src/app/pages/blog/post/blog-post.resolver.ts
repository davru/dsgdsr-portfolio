import { Injectable } from "@angular/core";
import { PostService } from "../../../services/post.service";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogPostResolver {
  constructor(private service: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    return this.service.getPost(route.paramMap.get('slug'));
  }
}
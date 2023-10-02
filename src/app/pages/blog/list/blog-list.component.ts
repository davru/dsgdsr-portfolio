import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../../interfaces/blog';
import posts from '../../../../assets/data/posts.json';
import { Locales, TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  public posts: BlogPost[] = [];
  public locale: Locales;

  constructor(
    translationService: TranslationService,
  ) {
    this.locale = translationService.getLocale();
    translationService.onLangChange().subscribe(({ lang }) => this.locale = lang as Locales)
  }

  ngOnInit(): void {
    this.posts = posts as BlogPost[];
  }
}

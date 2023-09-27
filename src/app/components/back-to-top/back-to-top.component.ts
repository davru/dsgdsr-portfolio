import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-back-to-top',
  imports: [
      CommonModule,
      IconsModule,
      TranslateModule
  ],
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent {
  public isAtTop = true;
  private topOffset = 30;

  private homeOffsetScroll = 95;

  constructor(
    public readonly router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('window:scroll', ['$event'])
  _onScroll(event: any): void {
    this.isAtTop =
      event.srcElement?.scrollingElement?.scrollTop < this.topOffset;
  }

  public scroll(): void {
    this.isAtTop
      ? this.scrollTo(this.vhToPixels(this.homeOffsetScroll))
      : this.scrollTo(0);
  }

  private scrollTo(px: number): void {
    window.scrollTo({
      left: this.document.body.scrollWidth,
      top: px,
      behavior: 'smooth',
    });
  }

  private vhToPixels(vh: number): number {
    return Math.round(window.innerHeight / (100 / vh));
  }
}

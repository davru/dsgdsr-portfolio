import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-back-to-top',
    templateUrl: './back-to-top.component.html',
    styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
    public isAtTop = true;
    private topOffset = 30;

    constructor(public readonly router: Router) {}

    ngOnInit(): void {}

    @HostListener('window:scroll', ['$event'])
    _onScroll(event: any): void {
        this.isAtTop = event.srcElement?.scrollingElement?.scrollTop < this.topOffset;
    }

    public scroll(): void {
        this.isAtTop ? this.scrollTo(this.vhToPixels(95)) : this.scrollTo(0);
    }

    private scrollTo(px: number): void {
        window.scrollTo({ left: document.body.scrollWidth, top: px, behavior: 'smooth' });
    }

    private vhToPixels(vh: number): number {
        return Math.round(window.innerHeight / (100 / vh));
    }
}

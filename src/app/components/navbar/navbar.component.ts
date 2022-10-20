import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: `./navbar.component.html`,
    styleUrls: ['./navbar.component.scss'],
})
export class NavComponent {
    constructor(
        private readonly router: Router,
        @Inject(DOCUMENT) private document: Document
    ) {}

    navigateToWork(): boolean {
        if (this.router.url !== '/') {
            this.router.navigate(['/']);
        } else {
            // SCROLL SERVICE
            const topOffset = Math.round(window.innerHeight / (100 / 95));
            window.scrollTo({
                left: this.document.body.scrollWidth,
                top: topOffset,
                behavior: 'smooth',
            });
        }
        return false;
    }
}

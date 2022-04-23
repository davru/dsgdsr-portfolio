import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    template: `
    <nav class="nav">
        <div class="nav-logo">
            <span>_<h1>dsgdsr</h1></span>
        </div>
        <div class="nav-links">
            <a href="#" class="nav-link" (click)="navigateToWork()">
                <span class="nav-link-number">01</span>
                <span>work</span>
            </a>
            <a routerLink="/blog" class="nav-link">
                <span class="nav-link-number">02</span>
                <span>blog</span>
            </a>
            <span class="nav-link"><app-theme-switcher></app-theme-switcher></span>
        </div>
    </nav>
    `,
    styleUrls: ['./navbar.component.scss']
})
export class NavComponent implements OnInit {
    constructor(private readonly router: Router) {}

    ngOnInit(): void {}

    navigateToWork(): boolean {
        if (this.router.url !== '/') {
            this.router.navigate(['/']);
        } else {
            // SCROLL SERVICE
            const topOffset = Math.round(window.innerHeight / (100 / 95));
            window.scrollTo({ left: document.body.scrollWidth, top: topOffset, behavior: 'smooth' });
        }
        return false;
    }
}

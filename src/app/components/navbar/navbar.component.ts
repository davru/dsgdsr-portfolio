import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { LocaleSwitcherComponent } from '../locale-switcher/locale-switcher.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    standalone: true,
    selector: 'app-nav',
    imports: [
        CommonModule,
        RouterModule,
        ThemeSwitcherComponent,
        LocaleSwitcherComponent,
        TranslateModule
    ],
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

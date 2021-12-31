import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-nav',
    template: `
    <nav class="nav theme-{{themeService.getTheme()}}">
        <div class="nav-logo">
            <span>_<h1>dsgdsr</h1></span>
        </div>
        <div class="nav-links">
            <span><a href="#projects">projects</a></span>
            <span><app-theme-switcher></app-theme-switcher></span>
        </div>
    </nav>
    `,
    styleUrls: ['./navbar.component.scss']
})
export class NavComponent implements OnInit {
    constructor(public themeService: ThemeService) { }

    ngOnInit(): void { }
}

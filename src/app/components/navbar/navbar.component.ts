import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    template: `
    <nav class="nav">
        <div class="nav-logo">
            <span>_<h1>dsgdsr</h1></span>
        </div>
        <div class="nav-links">
            <a href="#projects" class="nav-link">
                <span class="nav-link-number">01</span>
                <span>projects</span>
            </a>
            <span class="nav-link"><app-theme-switcher></app-theme-switcher></span>
        </div>
    </nav>
    `,
    styleUrls: ['./navbar.component.scss']
})
export class NavComponent implements OnInit {
    constructor() {}

    ngOnInit(): void { }
}

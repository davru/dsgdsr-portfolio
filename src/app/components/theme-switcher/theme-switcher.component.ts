import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeModes, ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-theme-switcher',
    templateUrl: './theme-switcher.component.html',
    styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
    public theme: ThemeModes = ThemeModes.Light;

    constructor(
        private themeService: ThemeService,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.theme = this.themeService.getTheme();
    }

    public setTheme(theme: ThemeModes): void {
        this.themeService.setTheme(theme, this.renderer);
        this.theme = theme;
    }
}

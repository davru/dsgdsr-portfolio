import { Component, Renderer2 } from '@angular/core';
import { ThemeModes, ThemeService } from './services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(public themeService: ThemeService, _renderer: Renderer2) {
        themeService.setTheme(
            (localStorage.getItem('theme-mode') as ThemeModes) ??
                ThemeModes.Dark,
            _renderer
        );
    }
}

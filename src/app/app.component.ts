import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeModes, ThemeService } from './services/theme.service';
import { trackEvent } from '@aptabase/web';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(public themeService: ThemeService, _renderer: Renderer2) {
        themeService.setTheme(
            (localStorage.getItem('theme-mode') as ThemeModes) ??
                ThemeModes.Dark,
            _renderer
        );
    }

    ngOnInit() {
        trackEvent('Page view');
    }
}

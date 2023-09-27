import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { trackEvent } from '@aptabase/web';
import { TranslationService } from './services/translation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(
        public themeService: ThemeService,
        translateService: TranslationService,
        _renderer: Renderer2
    ) {
        themeService.init(_renderer);
        translateService.init();
    }

    ngOnInit() {
        trackEvent('Page view');
    }
}

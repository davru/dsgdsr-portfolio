import { EventEmitter, Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

export type Locales = 'en' | 'es';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    private languages: Locales[] = ['en', 'es'];

    constructor(private translate: TranslateService) {}

    public init(): void {
        this.translate.addLangs(this.languages);
        this.translate.setDefaultLang('en');
    
        const locale = localStorage.getItem('locale');
        if (locale) {
            this.setLocale(locale as Locales);
        }
    }

    public setLocale(lang: Locales): void {
        this.translate.use(lang);
        localStorage.setItem('locale', lang);
    }

    public getLocale(): Locales {
        return this.translate.currentLang as Locales ?? 'en';
    }

    public onLangChange(): EventEmitter<LangChangeEvent> {
        return this.translate.onLangChange;
    }
}

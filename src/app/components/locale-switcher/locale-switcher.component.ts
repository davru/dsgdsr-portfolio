import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { Locales, TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    standalone: true,
    selector: 'app-locale-switcher',
    imports: [
        CommonModule,
        IconsModule,
        TranslateModule
    ],
    templateUrl: './locale-switcher.component.html',
    styleUrls: ['./locale-switcher.component.scss'],
})
export class LocaleSwitcherComponent {
    public locales: Locales[] = ['en', 'es'];
    public currentLocale = 'en';
    public isOpen = false;

    constructor(
        private translateService: TranslationService,
        private eRef: ElementRef
    ) {
        this.currentLocale = this.translateService.getLocale();
    }

    @HostListener('document:click', ['$event'])
    _clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }

    public onChange(locale: Locales) {
        this.currentLocale = locale;
        this.translateService.setLocale(locale);
        this.isOpen = false;
    }

    public toggle(e: Event) {
        this.isOpen = !this.isOpen;
    }
}

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

export enum ThemeModes {
    Dark = 'dark',
    Light = 'light',
}

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public theme: ThemeModes = ThemeModes.Dark;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    public setTheme(theme: ThemeModes, renderer: Renderer2): void {
        this.theme = theme;
        localStorage.setItem('theme-mode', theme);
        this.updateRootVariables(theme, renderer);
    }

    public getTheme(): ThemeModes {
        return this.theme;
    }

    private updateRootVariables(theme: ThemeModes, renderer: Renderer2): void {
        renderer.removeClass(
            this.document.body,
            theme === ThemeModes.Dark ? ThemeModes.Light : ThemeModes.Dark
        );
        renderer.addClass(this.document.body, theme);
    }
}

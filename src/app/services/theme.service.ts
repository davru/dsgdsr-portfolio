import { Injectable } from '@angular/core';

export enum ThemeModes {
  Dark = 'dark',
  Light = 'light'
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme: ThemeModes = ThemeModes.Dark;

  constructor() {}

  public setTheme(theme: ThemeModes): void {
    this.theme = theme;
    localStorage.setItem('theme-mode', theme);
  }

  public getTheme(): ThemeModes {
    return this.theme;
  }
}

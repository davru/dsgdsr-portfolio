import { ElementRef, Injectable } from '@angular/core';

export enum ThemeModes {
  Dark = 'dark',
  Light = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme: ThemeModes = ThemeModes.Dark;

  private styleVariables = {
    '--bg-color': {
      light: 'white',
      dark: '#23252c'
    },
    '--scrollbar-bg': {
      light: '#333333',
      dark: '#ffffff'
    },
    '--bg-secondary-color': {
      light: '#30333e',
      dark: '#323744'
    },
    '--text-color': {
      light: '#161618',
      dark: 'white'
    },
    '--color-text-main': {
      light: '#fb24a2',
      dark: '#ff69c1'
    },
    '--terminal-shadow': {
      light: '0px 10px 40px #52525290',
      dark: '0px 10px 20px #00000030'
    }
  };

  constructor() {}

  public setTheme(theme: ThemeModes): void {
    this.theme = theme;
    localStorage.setItem('theme-mode', theme);
    this.updateRootVariables(theme);
  }

  public getTheme(): ThemeModes {
    return this.theme;
  }

  private updateRootVariables(theme: ThemeModes): void {
    const root = document.documentElement;

    Object.keys(this.styleVariables).forEach(cssVar => {
      root.style.setProperty(cssVar, this.styleVariables[cssVar][theme]);
    });
  }
}

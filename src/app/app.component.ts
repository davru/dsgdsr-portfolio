import { Component, OnInit } from '@angular/core';
import { ThemeModes, ThemeService } from './services/theme.service';
import { load } from 'fathom-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public themeService: ThemeService) {
    themeService.setTheme(localStorage.getItem('theme-mode') as ThemeModes ?? ThemeModes.Dark);
  }

  ngOnInit(): void {
    // ENV VARIABLE
    load('BRJUSAOF');
  }
}

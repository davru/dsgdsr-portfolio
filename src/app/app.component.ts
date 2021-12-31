import { Component, OnInit } from '@angular/core';
import { PwaService } from './services/pwa.service';
import { ThemeModes, ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    pwaService: PwaService,
    public themeService: ThemeService
  ) {
    pwaService.runPwaCheck();
    themeService.setTheme(localStorage.getItem('theme-mode') as ThemeModes ?? ThemeModes.Light);
  }

  ngOnInit(): void {}
}

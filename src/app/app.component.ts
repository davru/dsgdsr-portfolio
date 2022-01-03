import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ThemeModes, ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    public themeService: ThemeService
  ) {
    themeService.setTheme(localStorage.getItem('theme-mode') as ThemeModes ?? ThemeModes.Light);
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.themeService.getTheme() === 'light' ? 'white' : '#23252c';
  }
}

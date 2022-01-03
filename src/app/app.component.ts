import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ThemeModes, ThemeService } from './services/theme.service';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  public projects: [] = [];

  constructor(
    private projectService: ProjectService,
    private elementRef: ElementRef,
    public themeService: ThemeService
  ) {
    themeService.setTheme(localStorage.getItem('theme-mode') as ThemeModes ?? ThemeModes.Light);
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => this.projects = data);
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.themeService.getTheme() === 'light' ? 'white' : '#23252c';
  }
}

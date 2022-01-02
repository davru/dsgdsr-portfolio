import { Component, OnInit } from '@angular/core';
import { PwaService } from './services/pwa.service';
import { ThemeModes, ThemeService } from './services/theme.service';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  public projects: [] = [];

  constructor(
    pwaService: PwaService,
    private projectService: ProjectService,
    public themeService: ThemeService
  ) {
    pwaService.runPwaCheck();
    themeService.setTheme(localStorage.getItem('theme-mode') as ThemeModes ?? ThemeModes.Light);
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => this.projects = data);
  }
}

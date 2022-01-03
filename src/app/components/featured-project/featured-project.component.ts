import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-featured-project',
    templateUrl: './featured-project.component.html',
    styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {
    @Input() project: Project;

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {}
}

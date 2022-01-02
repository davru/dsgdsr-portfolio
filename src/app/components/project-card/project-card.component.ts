import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

export interface Project {
    name: string;
    slug: string;
}

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
    @Input() project: Project;

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {}
}

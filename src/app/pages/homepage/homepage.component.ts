import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    public projects: [] = [];

    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
        this.projectService.getProjects().subscribe(data => this.projects = data);
    }
}

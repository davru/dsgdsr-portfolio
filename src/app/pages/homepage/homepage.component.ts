import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import projects from '../../../assets/data/projects.json';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
    public projects: Project[] = [];

    constructor() {}

    ngOnInit(): void {
        this.projects = (projects as Project[]).map((p, idx) => {
            p.index = idx;
            return p;
        });
    }
}

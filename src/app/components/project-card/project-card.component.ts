import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-project-card',
    imports: [CommonModule],
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
    @Input() project: Project;
}

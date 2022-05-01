import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
    selector: 'app-featured-project',
    templateUrl: './featured-project.component.html',
    styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent {
    @Input() project: Project;
    @Input() rtl = false;
}

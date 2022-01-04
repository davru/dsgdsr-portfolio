import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { LazyImgDirective } from '../../directives/lazy-load.directive';

@NgModule({
    declarations: [
        ProjectCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ProjectCardComponent
    ]
})
export class ProjectCardModule {}

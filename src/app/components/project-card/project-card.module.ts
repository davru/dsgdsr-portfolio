import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';

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

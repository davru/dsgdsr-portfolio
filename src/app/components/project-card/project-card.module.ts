import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectCardModule {}

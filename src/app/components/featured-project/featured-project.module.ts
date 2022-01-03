import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedProjectComponent } from './featured-project.component';

@NgModule({
    declarations: [
        FeaturedProjectComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FeaturedProjectComponent
    ]
})
export class FeaturedProjectModule {}

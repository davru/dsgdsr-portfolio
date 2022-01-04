import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedProjectComponent } from './featured-project.component';
import { LazyImgDirective } from '../../directives/lazy-load.directive';

@NgModule({
    declarations: [
        FeaturedProjectComponent,
        LazyImgDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FeaturedProjectComponent
    ]
})
export class FeaturedProjectModule {}

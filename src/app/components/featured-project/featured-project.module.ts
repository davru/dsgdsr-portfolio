import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedProjectComponent } from './featured-project.component';
import { LazyImgDirective } from '../../directives/lazy-load.directive';
import { IconsModule } from '../icons/icons.module';
import { TagListModule } from '../tag-list/tag-list.module';

@NgModule({
    declarations: [
        FeaturedProjectComponent,
        LazyImgDirective
    ],
    imports: [
        CommonModule,
        IconsModule,
        TagListModule
    ],
    exports: [
        FeaturedProjectComponent
    ]
})
export class FeaturedProjectModule {}

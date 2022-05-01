import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedProjectComponent } from './featured-project.component';
import { IconsModule } from '../icons/icons.module';
import { TagListModule } from '../tag-list/tag-list.module';

@NgModule({
    declarations: [
        FeaturedProjectComponent
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

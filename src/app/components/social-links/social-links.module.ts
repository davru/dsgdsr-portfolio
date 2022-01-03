import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './social-links.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    declarations: [
        SocialLinksComponent
    ],
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        SocialLinksComponent
    ]
})
export class SocialLinksModule {}

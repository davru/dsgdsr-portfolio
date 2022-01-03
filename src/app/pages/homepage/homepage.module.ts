import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ],
    exports: [
        HomepageComponent
    ]
})
export class HomepageModule {}

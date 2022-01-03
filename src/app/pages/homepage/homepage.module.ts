import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { ComponentsModule } from '../../components/components.module';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        HomepageRoutingModule
    ]
})
export class HomepageModule {}

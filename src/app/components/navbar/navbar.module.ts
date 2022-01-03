import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './navbar.component';
import { ThemeSwitcherModule } from '../theme-switcher/theme-switcher.module';

@NgModule({
    declarations: [
        NavComponent,
    ],
    imports: [
        CommonModule,
        ThemeSwitcherModule
    ],
    exports: [
        NavComponent
    ]
})
export class NavModule {}

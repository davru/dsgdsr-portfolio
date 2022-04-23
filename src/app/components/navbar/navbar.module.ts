import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './navbar.component';
import { ThemeSwitcherModule } from '../theme-switcher/theme-switcher.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,

        // Components
        ThemeSwitcherModule
    ],
    exports: [
        NavComponent
    ]
})
export class NavModule {}

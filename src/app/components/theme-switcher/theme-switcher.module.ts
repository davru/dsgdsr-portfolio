import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    declarations: [
        ThemeSwitcherComponent
    ],
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        ThemeSwitcherComponent
    ]
})
export class ThemeSwitcherModule {}

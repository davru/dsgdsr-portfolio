import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher.component';

@NgModule({
    declarations: [
        ThemeSwitcherComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ThemeSwitcherComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThemeSwitcherModule {}

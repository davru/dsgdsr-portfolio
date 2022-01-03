import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavModule {}

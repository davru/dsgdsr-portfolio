import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from './back-to-top.component';

@NgModule({
    declarations: [
        BackToTopComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BackToTopComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BackToTopModule {}

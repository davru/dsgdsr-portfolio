import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';

@NgModule({
    declarations: [
        TerminalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TerminalComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TerminalModule {}

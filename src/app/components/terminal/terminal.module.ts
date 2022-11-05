import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [TerminalComponent],
    imports: [CommonModule, RouterModule],
    exports: [TerminalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TerminalModule {}

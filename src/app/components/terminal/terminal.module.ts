import { NgModule } from '@angular/core';
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
    ]
})
export class TerminalModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ErrorPageComponent],
    imports: [CommonModule, RouterModule],
    exports: [ErrorPageComponent],
})
export class ErrorModule {}

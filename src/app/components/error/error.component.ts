import { Component } from '@angular/core';

@Component({
    selector: 'app-error-page',
    template: `
        <div class="error-container">
            <img src="/assets/images/404.gif" />

            <div class="error-text">
                <span>Oh! you seem lost... but you can still dance :)</span>
                <span>or go to <a [routerLink]="['/']">homepage</a></span>
            </div>
        </div>
    `,
    styleUrls: ['./error.component.scss'],
})
export class ErrorPageComponent {
    constructor() {}
}

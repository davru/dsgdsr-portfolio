import { Component } from '@angular/core';

@Component({
    selector: 'app-error-page',
    template: `
        <div class="error-container">
            <video src="/assets/images/404.webm" autoplay loop></video>
        </div>
    `,
    styleUrls: ['./error.component.scss'],
})
export class ErrorPageComponent {
    constructor() {}
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-clipboard-button',
    templateUrl: './clipboard-button.component.html',
    styleUrls: ['./clipboard-button.component.scss']
})
export class ClipboardButtonComponent {
    public isCopied = false;

    onClick() {
        this.isCopied = true;
        setTimeout(() => {
            this.isCopied = false;
        }, 1500);
    }
}
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-progress-bar',
    imports: [CommonModule],
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, OnDestroy {
    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit(): void {
        this.document.addEventListener('scroll', this.onScroll.bind(this));
    }

    ngOnDestroy(): void {
        this.document.removeEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll(): void {
        const docElem = this.document.documentElement;
        const docBody = this.document.body;
        const scrollTop = docElem['scrollTop'] || docBody['scrollTop'];
        const scrollBottom =
            (docElem['scrollHeight'] || docBody['scrollHeight']) -
            window.innerHeight;
        const scrollPercent = (scrollTop / scrollBottom) * 100 + '%';

        this.document
            .getElementById('progress-bar')
            .style.setProperty('--scrollAmount', scrollPercent);
    }
}

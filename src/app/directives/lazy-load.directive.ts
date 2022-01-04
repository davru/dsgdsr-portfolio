import { Directive, ElementRef, Renderer2 } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: 'img' })
export class LazyImgDirective {
    constructor(elRef: ElementRef, renderer: Renderer2) {
        const supports = 'loading' in HTMLImageElement.prototype;

        if (supports) {
            renderer.setAttribute(elRef.nativeElement, 'loading', 'lazy');
        }
    }
}

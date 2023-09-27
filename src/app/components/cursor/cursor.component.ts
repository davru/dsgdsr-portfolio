import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
    standalone: true,
    selector: 'app-cursor',
    templateUrl: './cursor.component.html',
    styleUrls: ['./cursor.component.scss'],
    imports: [IconsModule, CommonModule]
})
export class CursorComponent implements AfterViewInit {
    public cursorSize = { height: 75, width: 75 }
    public cursorStyle: 'default' | 'external-link' | 'link' = 'default'
    private action: string
    private mousePosition = { x: -100, y: -100 }
    private clickTimeout: NodeJS.Timeout

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) { }

    private updateCursor(cursor: HTMLElement) {
        cursor.style.left = (this.mousePosition.x - this.cursorSize.width / 2)  + 'px'
        cursor.style.top = (this.mousePosition.y + window.scrollY - this.cursorSize.height / 2)  + 'px'
    }

    ngAfterViewInit() {
        const cursor: HTMLElement = this.document.querySelector(".cursor")

        this.document.addEventListener('mousemove', (event) => {
            this.mousePosition = {
                x: event.pageX,
                y: event.clientY
            }
            this.updateCursor(cursor)
        })

        this.document.addEventListener('scroll', () => this.updateCursor(cursor))
        
        this.document.addEventListener('click', () => {
            if (this.clickTimeout) {
                clearTimeout(this.clickTimeout)
                cursor.classList.remove('expand')
            }
            
            cursor.classList.add('expand');
            this.clickTimeout = setTimeout(() => cursor.classList.remove('expand'), 500)

            if (this.cursorStyle === 'external-link' && this.action) {
                window.open(this.action, '_blank')
            }
        })

        this.document.addEventListener('mouseover', (e) => {
            if (!cursor.classList.contains('show')) {
                cursor.classList.add('show')
            }

            const target = e.target as HTMLElement
            
            if (target) {
                const link = target.nodeName === 'A' && !!target.getAttribute('href')
                const externalLink = target.getAttribute('cursorLink')

                if (externalLink) {
                    this.cursorStyle = 'external-link'
                    this.action = externalLink
                } else if (link) {
                    this.cursorStyle = 'link'
                    this.action = null
                } else {
                    this.cursorStyle = 'default'
                    this.action = null
                }
            } else {
                this.cursorStyle = 'default'
                this.action = null
            }
        })
    }
}
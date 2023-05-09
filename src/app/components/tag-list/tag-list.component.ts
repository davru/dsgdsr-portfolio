import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-tag-list',
    imports: [CommonModule],
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
    @Input() tags: string[];
    @Input() style: any;
    @Input() backgroundColor: string;
}

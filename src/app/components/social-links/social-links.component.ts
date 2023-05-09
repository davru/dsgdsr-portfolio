import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
    standalone: true,
    selector: 'app-social-links',
    imports: [
        CommonModule,
        IconsModule
    ],
    templateUrl: './social-links.component.html',
    styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {}

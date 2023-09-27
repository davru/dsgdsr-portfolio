import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { TagListComponent } from '../tag-list/tag-list.component';
import { Locales, TranslationService } from '../../services/translation.service';

@Component({
    standalone: true,
    selector: 'app-featured-project',
    imports: [
        CommonModule,
        IconsModule,
        TagListComponent
    ],
    templateUrl: './featured-project.component.html',
    styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent {
    @Input() project: Project;
    @Input() rtl = false;
    public locale: Locales;

    constructor(translationService: TranslationService) {
        this.locale = translationService.getLocale();
    }
}

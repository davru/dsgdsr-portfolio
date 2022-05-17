import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import { SupabaseService } from '../../services/supabase.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    public projects: Project[] = [];

    constructor(private supabaseService: SupabaseService) {}

    ngOnInit(): void {
        if (this.supabaseService.projects?.length) {
            this.projects = this.supabaseService.projects;
        } else {
            this.supabaseService.getProjects().then(data => {
                this.projects = data.data;

                this.projects.forEach((project, index) => {
                    this.supabaseService.downloadImage('project-images', project.image_url).then(image => {
                        project.featured_image = this.supabaseService.sanitizeUrl(image.data);
                        project.index = index;

                        if (index === this.projects.length - 1) {
                            this.supabaseService.projects = this.projects;
                        }
                    });
                });
            });
        }
    }
}

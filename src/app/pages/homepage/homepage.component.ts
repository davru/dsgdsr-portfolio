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
                this.projects = data.data.map((p, idx) => {
                    p.index = idx;
                    return p;
                });
                this.supabaseService.projects = this.projects;
            });
        }
    }
}

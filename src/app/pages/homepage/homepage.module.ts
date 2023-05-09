import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { FeaturedProjectComponent } from '../../components/featured-project/featured-project.component';
import { RouterModule } from '@angular/router';
import { TerminalComponent } from '../../components/terminal/terminal.component';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        CommonModule,

        // Components
        FeaturedProjectComponent,
        TerminalComponent,

        // Routing
        RouterModule.forChild([{
            path: '',
            component: HomepageComponent
        }])
    ],
    exports: [],
    schemas: []
})
export class HomepageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { FeaturedProjectComponent } from '../../components/featured-project/featured-project.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        CommonModule,

        // Components
        FeaturedProjectComponent,

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

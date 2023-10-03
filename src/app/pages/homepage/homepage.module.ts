import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { FeaturedProjectComponent } from '../../components/featured-project/featured-project.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from 'src/app/components/contact/contact.component';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,

        // Components
        FeaturedProjectComponent,
        ContactComponent,

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

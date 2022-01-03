import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// COMPONENTS
import { FeaturedProjectModule } from './featured-project/featured-project.module';
import { NavModule } from './navbar/navbar.module';
import { ProjectCardModule } from './project-card/project-card.module';
import { TerminalModule } from './terminal/terminal.module';

const components = [
    FeaturedProjectModule,
    NavModule,
    ProjectCardModule,
    TerminalModule,
];

@NgModule({
    declarations: [],
    imports: components,
    exports: components,
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
})
export class ComponentsModule {}

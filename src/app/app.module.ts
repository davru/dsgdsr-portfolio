import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// COMPONENTS
import { NavModule } from './components/navbar/navbar.module';
import { TerminalModule } from './components/terminal/terminal.module';
import { HttpClientModule } from '@angular/common/http';
import { BackToTopModule } from './components/back-to-top/back-to-top.module';
import { ProjectCardModule } from './components/project-card/project-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

    // Components,
    NavModule,
    TerminalModule,
    BackToTopModule,
    ProjectCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

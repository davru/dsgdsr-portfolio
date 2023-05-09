import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Component modules
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { NavComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

/*export const checkForUpdates = (swUpdate: SwUpdate): (() => Promise<any>) => {
  return (): Promise<void> =>
    new Promise((resolve) => {
      swUpdate.checkForUpdate();
      swUpdate.available.subscribe(() => {
          window.location.reload();
      });

      resolve();
    });
};*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,

    // Service worker
    /*ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),*/

    // Components
    BackToTopComponent,
    SocialLinksComponent,
    NavComponent
  ],
  providers: [
    provideClientHydration()
    /*{
      provide: APP_INITIALIZER,
      useFactory: checkForUpdates,
      multi: true,
      deps: [SwUpdate]
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

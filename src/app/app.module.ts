import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Component modules
import { BackToTopModule } from './components/back-to-top/back-to-top.module';
import { SocialLinksModule } from './components/social-links/social-links.module';
import { NavModule } from './components/navbar/navbar.module';

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
    BackToTopModule,
    SocialLinksModule,
    NavModule
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

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BackToTopModule } from './components/back-to-top/back-to-top.module';
import { SocialLinksModule } from './components/social-links/social-links.module';
import { HomepageModule } from './pages/homepage/homepage.module';

export const checkForUpdates = (swUpdate: SwUpdate): (() => Promise<any>) => {
  return (): Promise<void> =>
    new Promise((resolve) => {
      swUpdate.checkForUpdate();
      swUpdate.available.subscribe(() => {
          window.location.reload();
      });

      resolve();
    });
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),

    // Components
    BackToTopModule,
    SocialLinksModule,

    // Homepage
    HomepageModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: checkForUpdates,
      multi: true,
      deps: [SwUpdate]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BackToTopModule } from './components/back-to-top/back-to-top.module';
import { SocialLinksModule } from './components/social-links/social-links.module';
import { AppRoutingModule } from './app.routing';
import { NavModule } from './components/navbar/navbar.module';

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
    BrowserModule,
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
  /*providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: checkForUpdates,
      multi: true,
      deps: [SwUpdate]
    }
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }

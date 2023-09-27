import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

// Internationalization
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Component modules
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { NavComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { UniversalRelativeInterceptor } from './services/universal-relative.interceptor';
import { CursorComponent } from './components/cursor/cursor.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,

    // Internationalization
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // Components
    BackToTopComponent,
    SocialLinksComponent,
    NavComponent,
    CursorComponent
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalRelativeInterceptor,
      multi: true
    }
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

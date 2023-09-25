import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { init } from '@aptabase/web';

init(environment.aptabase_key);

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule } from '@angular/platform-server';

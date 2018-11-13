/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@app/app.module';
import "hammerjs";
import { environment } from '@env/environment';

if(environment.production){
  console.log('prod');
  enableProdMode();
}
else{
  console.log('dev');
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */
import { bootstrapWorkerUi, WORKER_UI_LOCATION_PROVIDERS } from '@angular/platform-webworker';
import { enableProdMode } from '@angular/core';
import "hammerjs";
import { environment } from '@env/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapWorkerUi('webworker.bundle.js', WORKER_UI_LOCATION_PROVIDERS);

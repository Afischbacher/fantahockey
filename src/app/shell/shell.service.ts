import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/core';
import { ShellComponent } from './shell.component';


export class Shell {

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      data: { reuse: true }
    };
  }
}

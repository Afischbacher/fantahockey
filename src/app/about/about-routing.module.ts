import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', component: AboutComponent, data: { title: 'About - FantaHockey' } },
    {
      path: "",
      redirectTo: "/dashboard",
      pathMatch: "full",
      data: {title: "Dashboard - FantaHockey"}
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }

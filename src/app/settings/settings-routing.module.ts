import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { SettingsComponent } from '@app/settings/settings.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'settings',  component: SettingsComponent, data: { title: 'Settings - FantaHockey' } },
    {
      path: "",
      redirectTo: "/dashboard",
      pathMatch: "full"
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SettingsRoutingModule { }
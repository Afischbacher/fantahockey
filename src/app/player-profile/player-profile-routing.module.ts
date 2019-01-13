import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { PlayerProfileComponent } from './player-profile.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'playerprofile/:playerid', component: PlayerProfileComponent, data: { title: 'Player Profile - FantaHockey' } },
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
export class PlayerProfileRoutingModule { }

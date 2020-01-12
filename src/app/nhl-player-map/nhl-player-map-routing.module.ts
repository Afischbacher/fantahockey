import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { NhlPlayerMapComponent } from './nhl-player-map.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'playermap',  component: NhlPlayerMapComponent, data: { title: 'NHL Player Map - FantaHockey' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class NhlPlayerMapRoutingModule { }
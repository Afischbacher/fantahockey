import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { NhlNewsComponent } from './nhl-news.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'news',  component: NhlNewsComponent, data: { title: 'NHL News - FantaHockey' } },
    { path: "", redirectTo: '/news', pathMatch: 'full'}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class NhlScoresRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeDashboardComponent } from '@app/trade-dashboard/trade-dashboard.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'dashboard',  component: TradeDashboardComponent, data: { title: 'Trade Dashboard - FantaHockey' } },
    { path: "", redirectTo: '/dashboard', pathMatch: 'full'}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class TradeDashboardRoutingModule { }
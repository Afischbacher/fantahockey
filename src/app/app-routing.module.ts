import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '@app/about/about.component';
import { TradeDashboardComponent } from '@app/trade-dashboard/trade-dashboard.component';
import { SettingsComponent } from '@app/settings/settings.component';

const routes: Routes = [
  // Fallback when no prior route is matched as dashboard is known as the home  
  { path: 'dashboard', component: TradeDashboardComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: "",redirectTo: "/dashboard", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

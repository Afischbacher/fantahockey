import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TradeDashboardRoutingModule } from '@app/trade-dashboard/trade-dashboard-routing.module';
import { TradeDashboardComponent } from '@app/trade-dashboard/trade-dashboard.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { NgxLoadingModule } from 'ngx-loading';
import { FantasyTradeToolModule } from '@app/components/fantasy-trade-tool/fantasy-trade-tool.module';
import { DashboardService } from '@app/core/services/dashboard.service';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    CoreModule,
    SharedModule,
    TradeDashboardRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatProgressBarModule,
    TourMatMenuModule,
    NgxLoadingModule,
    FantasyTradeToolModule
  ],
  declarations: [
    TradeDashboardComponent,
  ],
  providers: [
    NhlDataService,
    DashboardService
  ]
})
export class TradeDashboardModule { }

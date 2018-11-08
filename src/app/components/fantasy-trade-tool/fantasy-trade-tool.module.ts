import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TradeDashboardRoutingModule } from '@app/trade-dashboard/trade-dashboard-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FantasyTradeToolComponent } from '@app/components/fantasy-trade-tool/fantasy-trade-tool.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TourMatMenuModule } from 'ngx-tour-md-menu';

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
    TourMatMenuModule,
    SharedModule,
  ],
  declarations: [FantasyTradeToolComponent],
  exports: [FantasyTradeToolComponent]
})
export class FantasyTradeToolModule { }

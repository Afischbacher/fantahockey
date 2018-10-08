import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TradeDashboardRoutingModule } from '@app/trade-dashboard/trade-dashboard-routing.module';
import { HomeComponent } from '@app/trade-dashboard/trade-dashboard.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    TradeDashboardRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    NhlDataService
  ]
})
export class TradeDashboardModule { }

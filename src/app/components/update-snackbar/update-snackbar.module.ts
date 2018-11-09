import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TradeDashboardRoutingModule } from '@app/trade-dashboard/trade-dashboard-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UpdateSnackbarComponent } from './update-snackbar.component';
import { MatTooltipModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatTooltipModule,
    MatToolbarModule,
    CoreModule,
    SharedModule,
    TradeDashboardRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  declarations: [UpdateSnackbarComponent],
  exports: [UpdateSnackbarComponent]
})
export class UpdateSnackbarModule { }

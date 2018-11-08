import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { NgxLoadingModule } from 'ngx-loading';
import { SettingsComponent } from '@app/settings/settings.component';
import { SettingsRoutingModule } from '@app/settings/settings-routing.module';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { SettingsService } from '@app/core/services/settings.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateSnackbarComponent } from '@app/components/update-snackbar/update-snackbar.component';
import { UpdateSnackbarModule } from '@app/components/update-snackbar/update-snackbar.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SettingsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatProgressBarModule,
    NgxLoadingModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,  
    TourMatMenuModule,
    MatSnackBarModule,
    UpdateSnackbarModule
  ],
  entryComponents: [UpdateSnackbarComponent],
  declarations: [
    SettingsComponent,
  ],
  providers: [
    SettingsService
  ]
})
export class SettingsModule { }

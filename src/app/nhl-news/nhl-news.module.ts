import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { NhlNewsComponent } from './nhl-news.component';
import { NhlScoresRoutingModule } from './nhl-news-routing.module';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    CoreModule,
    SharedModule,
    NhlScoresRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule,
    TourMatMenuModule,
  ],
  declarations: [
    NhlNewsComponent,
  ],
  providers: [
    NhlDataService,
  ]
})
export class NhlNewsModule { }

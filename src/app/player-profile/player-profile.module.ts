import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PlayerProfileRoutingModule } from './player-profile-routing.module';
import { PlayerProfileComponent } from './player-profile.component';
import { MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSortModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SeasonStatsMatTableComponent } from '@app/components/season-stats-mat-table/season-stats-mat-table.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    TranslateModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatIconModule,
    PlayerProfileRoutingModule,
    MatListModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule
  ],
  declarations: [PlayerProfileComponent, SeasonStatsMatTableComponent]
})
export class PlayerProfileModule { }

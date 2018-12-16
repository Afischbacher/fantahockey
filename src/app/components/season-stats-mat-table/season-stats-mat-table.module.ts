import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonStatsMatTableComponent } from './season-stats-mat-table.component';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material'

@NgModule({ 
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],  
  declarations: [SeasonStatsMatTableComponent],
  exports: [SeasonStatsMatTableComponent]
})

export class SeasonStatsMatTableModule {
}

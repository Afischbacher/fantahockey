import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerNewsTabComponent } from './player-news-tab.component';
import { MatTableModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material'
import { PlayerNewsService } from '@app/core/services/player-news.service';

@NgModule({ 
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule
  ],  
  declarations: [PlayerNewsTabComponent],
  exports: [PlayerNewsTabComponent]
})

export class PlayerNewsTabModule {
}

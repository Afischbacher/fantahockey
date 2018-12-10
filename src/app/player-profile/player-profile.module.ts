import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PlayerProfileRoutingModule } from './player-profile-routing.module';
import { PlayerProfileComponent } from './player-profile.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    MatIconModule,
    PlayerProfileRoutingModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [PlayerProfileComponent]
})
export class PlayerProfileModule { }

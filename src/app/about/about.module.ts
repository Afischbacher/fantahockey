import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    MatIconModule,
    AboutRoutingModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MenuListItemComponent } from './menu-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    FontAwesomeModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],  
  declarations: [MenuListItemComponent],
  exports: [MenuListItemComponent]
})
export class MenuListItemModule {
}

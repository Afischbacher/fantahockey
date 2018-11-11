import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { MenuListItemModule } from '@app/components/menu-list-item/menu-list-item.module';
import { MenuListItemComponent } from '@app/components/menu-list-item/menu-list-item.component';

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
    MatIconModule,
    MenuListItemModule,
    TourMatMenuModule
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    HeaderComponent
  ]
})
export class ShellModule {
}

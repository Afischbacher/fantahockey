import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuListItemComponent } from '@app/shell/menu-list-item/menu-list-item.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    FontAwesomeModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    MenuListItemComponent
  ]
})
export class ShellModule {
}

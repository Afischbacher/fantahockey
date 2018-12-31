import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TradeDashboardModule } from './trade-dashboard/trade-dashboard.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { SettingsModule } from '@app/settings/settings.module';
import { PlayerProfileModule } from './player-profile/player-profile.module';
import { WorkerAppModule, WORKER_APP_LOCATION_PROVIDERS } from '@angular/platform-webworker';
import { APP_BASE_HREF } from '@angular/common'


@NgModule({
  imports: [
    WorkerAppModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    TradeDashboardModule,
    AboutModule,
    PlayerProfileModule,
    SettingsModule,
    TourMatMenuModule.forRoot(),
    AppRoutingModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circle,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: 'gray',
      tertiaryColour: '#ffffff'
    }),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    WORKER_APP_LOCATION_PROVIDERS
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

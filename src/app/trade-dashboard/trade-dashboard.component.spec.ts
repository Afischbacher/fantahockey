import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TradeDashboardComponent } from '@app/trade-dashboard/trade-dashboard.component';
import { QuoteService } from '@app/trade-dashboard/trade-dashboard.service';

describe('TradeDashboardComponent', () => {
  let component: TradeDashboardComponent;
  let fixture: ComponentFixture<TradeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          HttpClientTestingModule
        ],
        declarations: [TradeDashboardComponent],
        providers: [QuoteService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

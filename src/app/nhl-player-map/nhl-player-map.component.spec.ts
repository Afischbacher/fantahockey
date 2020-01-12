import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { NhlPlayerMapComponent } from './nhl-player-map.component';

describe('NhlPlayerMapDashboard', () => {
  let component: NhlPlayerMapComponent;
  let fixture: ComponentFixture<NhlPlayerMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          HttpClientTestingModule
        ],
        declarations: [NhlPlayerMapComponent],
        providers: [NhlPlayerMapComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhlPlayerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

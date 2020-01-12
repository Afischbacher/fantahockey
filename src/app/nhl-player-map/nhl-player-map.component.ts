import { Component, OnInit, AfterContentInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NhlDataService } from '@app/core/services/nhl-data.service';

@Component({
  selector: 'nhl-player-map',
  templateUrl: './nhl-player-map.component.html',
  styleUrls: ['./nhl-player-map.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(":enter", [
        style({ opacity: "0" }),
        animate('.3s ease-in', style({ opacity: "1" })),
      ]),
    ]),
    trigger('fadeOut', [
      transition(":leave", [
        style({ opacity: "1" }),
        animate('.3s ease-out', style({ opacity: "0" })),
      ]),
    ]),

  ],
})
export class NhlPlayerMapComponent implements OnInit, AfterContentInit, OnDestroy {

  constructor(private nhlDataService: NhlDataService) { }

  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}


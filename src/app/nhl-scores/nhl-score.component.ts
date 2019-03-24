import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'nhl-scores',
  templateUrl: './nhl-score.component.html',
  styleUrls: ['./nhl-score.component.scss'],
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
export class NhlScoreComponent implements OnInit, AfterContentInit {
  
  constructor() { }
  
    ngAfterContentInit(): void {
  }
  
  ngOnInit(): void {
  }


}


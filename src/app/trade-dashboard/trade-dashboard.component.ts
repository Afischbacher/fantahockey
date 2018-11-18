import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TeamPlayer } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'trade-dashboard',
  templateUrl: './trade-dashboard.component.html',
  styleUrls: ['./trade-dashboard.component.scss'],
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
export class TradeDashboardComponent implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
      this.endLoading();
    }


  loading = false;
  playerSet: TeamPlayer[] = [];
  isLoading = false;
  value = 0;
  playerName = "";
  fantasyTradeComponentIds: Array<string[]> = [["tour3", "tour4"], ["tour5", "tour6"]];

  constructor() { }

  startLoading(): void {
    this.loading = true;
  }

  endLoading(): void {
    this.loading = false;
  }

  ngOnInit(): void {;
    this.startLoading();
  }

}


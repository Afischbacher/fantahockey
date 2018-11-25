import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { TeamPlayer } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { DashboardService } from '@app/core/services/dashboard.service';
import { first, switchMap } from 'rxjs/operators';
import { Chart } from 'chart.js';

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
  constructor(private dashboardService: DashboardService) { }

  loading = false;
  playerSet: TeamPlayer[] = [];
  isLoading = false;
  value = 0;
  playerName = "";
  fantasyTradeComponentIds: Array<string[]> = [["tour3", "tour4"], ["tour5", "tour6"]];
  currentSelectedPlayerNumber: any[] = [{ id: 0, numberOfPlayers: 0 }, { id: 1, numberOfPlayers: 0 }];
  numberOfPlayers = 0;
  @ViewChild('radarChart') chartRef : ElementRef;
  chart: any;

  ngAfterContentInit(): void {
    this.endLoading();
  }
  startLoading(): void {
    this.loading = true;
  }

  endLoading(): void {
    this.loading = false;
  }

  ngOnInit(): void {
    this.startLoading();
  }

  getNumberOfPlayers(players: any) {

    let playerSelection = this.currentSelectedPlayerNumber.filter(x => x.id === players.id);

    let totalPlayers = 0;

    playerSelection[0].numberOfPlayers = players.numberOfPlayers;

    this.currentSelectedPlayerNumber.filter(x => x.id === players.id)[0] = playerSelection;

    this.currentSelectedPlayerNumber.forEach(x => {

      totalPlayers += x.numberOfPlayers

    });

    this.dashboardService.updatePlayerCount(totalPlayers);
    this.dashboardService.getTotalPlayers().subscribe(res => this.numberOfPlayers = res);

    if (this.numberOfPlayers > 1)
      this.buildRadarChart();

  }

  buildRadarChart(): void {

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'radar',
      data: {
        labels: ['Goals', 'Assists', 'Points'],
        datasets: [{
          label: 'Player 1',
          pointBackgroundColor: 'red',
          pointStyle: 'circle',
          data: [1, 4, 5]
        },
        {
          label: 'Player 2',
          pointBackgroundColor: 'red',
          pointStyle: 'circle',
          data: [2, 2, 3]
        }
        ]
      },
      options: {
      }
    });

  };
}


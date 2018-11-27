import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { TeamPlayer } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { DashboardService } from '@app/core/services/dashboard.service';
import { Chart, ChartData } from 'chart.js';

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
  currentSelectedPlayers: any[] = [{ id: 0, players: [], numberOfPlayers: 0 }, { id: 1, players: [], numberOfPlayers: 0 }];
  numberOfPlayers = 0;
  allSelectedPlayers: TeamPlayer[] = []
  @ViewChild('radarChart') chartRef: ElementRef;
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

  getCurrentPlayers(players: any) {

    console.log(players);

    let playerSelection = this.currentSelectedPlayers.filter(x => x.id === players.id);

    let totalPlayers = 0;
    let allPlayers: TeamPlayer[] = [];

    playerSelection[0].numberOfPlayers = players.numberOfPlayers;
    playerSelection[0].players = players.players;

    this.currentSelectedPlayers.filter(x => x.id === players.id)[0] = playerSelection;

    this.currentSelectedPlayers.forEach(x => {

      (<any[]>x.players).forEach(player => allPlayers.push(player));

      totalPlayers += x.numberOfPlayers
    });

    console.log(allPlayers);

    this.dashboardService.updatePlayerCount(totalPlayers);
    this.dashboardService.updatePlayerSelection(allPlayers);
    this.dashboardService.getTotalPlayers().subscribe(res => this.numberOfPlayers = res);
    this.dashboardService.getAllSelectedPlayers().subscribe(res => this.allSelectedPlayers = res);

    if (this.numberOfPlayers > 1) {
      let playerData = this.getRadarChartData(this.allSelectedPlayers);
      this.buildPlayerRadarChart(playerData);
    }

  }

  buildPlayerRadarChart(playerData: Chart.ChartDataSets[]): void {

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'radar',
      data: {
        labels:
          ['Goals',
            'Assists',
            'Points',
            'SOG',
            'PPG',
            'Shots Blocked',
            'Even Shots',
            'Face Off Percentage',
            'Games',
            'GWG',
            'Hits',
            'Overtime Goals',
            'Power Play Points',
            'Shot Percentage',
            'SSH',
            ],
        datasets: playerData
      },
      options: {
      }
    });

  }

  getRadarChartData(allSelectedPlayers: TeamPlayer[]): Chart.ChartDataSets[] {

    let data: Chart.ChartDataSets[] = [];

    console.log(allSelectedPlayers);

    allSelectedPlayers.forEach(player => {

      let dataSet: Chart.ChartDataSets = {
        data: [],
        label: ""
      };

      dataSet.data = [player.overallStats.stats[0].splits[0].stat.goals,
      player.overallStats.stats[0].splits[0].stat.assists,
      player.overallStats.stats[0].splits[0].stat.points,
      player.overallStats.stats[0].splits[0].stat.shots,
      player.overallStats.stats[0].splits[0].stat.powerPlayGoals,
      player.overallStats.stats[0].splits[0].stat.blocked,
      player.overallStats.stats[0].splits[0].stat.evenShots,
      player.overallStats.stats[0].splits[0].stat.faceOffPct,
      player.overallStats.stats[0].splits[0].stat.games,
      player.overallStats.stats[0].splits[0].stat.gameWinningGoals,
      player.overallStats.stats[0].splits[0].stat.hits,
      player.overallStats.stats[0].splits[0].stat.overTimeGoals,
      player.overallStats.stats[0].splits[0].stat.powerPlayPoints,
      player.overallStats.stats[0].splits[0].stat.shotPct,
      player.overallStats.stats[0].splits[0].stat.shortHandedShots,

      ]

      dataSet.label = player.person.fullName;
      // each player color is based on their main team color
      // dataSet.backgroundColor
      data.push(dataSet);

    });

    return data;

  }
}


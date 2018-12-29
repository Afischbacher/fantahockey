import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { TeamPlayer } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { DashboardService } from '@app/core/services/dashboard.service';
import { Chart, ChartData } from 'chart.js';
import { Constants } from '@app/core/constants/constants';
import { forkJoin } from 'rxjs';

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
  playersFrom: TeamPlayer[];
  playersTo: TeamPlayer[];

  @ViewChild('playerRadarChart') playerChartRef: ElementRef;
  @ViewChild('goalieRadarChart') goalieChartRef: ElementRef;

  allPlayers: TeamPlayer[] = [];
  allGoalies: TeamPlayer[] = [];

  playerChart: any;
  goalieChart: any;

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
    // this.buildGoalieRadarChart([]);
    // this.buildPlayerRadarChart([]);

  }

  getCurrentPlayers(players: any) {

    if (players.id === 0) this.dashboardService.updatePlayersFrom(players.players);
    if (players.id === 1) this.dashboardService.updatePlayersTo(players.players);

    let playerSelection = this.currentSelectedPlayers.filter(x => x.id === players.id);

    let totalPlayers = 0;
    let allEntities: TeamPlayer[] = [];

    playerSelection[0].numberOfPlayers = players.numberOfPlayers;
    playerSelection[0].players = players.players;

    this.currentSelectedPlayers.filter(x => x.id === players.id)[0] = playerSelection;

    this.currentSelectedPlayers.forEach(x => {

      (<any[]>x.players).forEach(player => allEntities.push(player));

      totalPlayers += x.numberOfPlayers
    });

    this.dashboardService.updatePlayerCount(totalPlayers);
    this.dashboardService.updatePlayerSelection(allEntities);
    this.dashboardService.getTotalPlayers().subscribe(res => this.numberOfPlayers = res);
    this.dashboardService.getAllSelectedPlayers().subscribe(res => this.allSelectedPlayers = res);

    this.allPlayers = this.allSelectedPlayers.filter(x => x.position.abbreviation === "LW"
      || x.position.abbreviation === "RW"
      || x.position.abbreviation === "C"
      || x.position.abbreviation === "D");

    this.allGoalies = this.allSelectedPlayers.filter(x => x.position.abbreviation === "G");

    // if (this.allPlayers.length > 0) {
    //   let playerData = this.getPlayerRadarChartData(this.allPlayers);
    //   this.buildPlayerRadarChart(playerData);
    // }
    // else {
    //   this.buildPlayerRadarChart([]);
    // }

    // if (this.allGoalies.length > 0) {
    //   let goalieData = this.getGoalieRadarChartData(this.allGoalies);
    //   this.buildGoalieRadarChart(goalieData);
    // }
    // else {
    //   this.buildGoalieRadarChart([]);
    // }
  }

  buildGoalieRadarChart(goalieData: Chart.ChartDataSets[]): void {

    if (this.goalieChart !== undefined)
      this.goalieChart.data.datasets = goalieData;

    this.goalieChart = new Chart(this.goalieChartRef.nativeElement, {
      type: 'radar',
      data: {
        labels:
          ["Save Percentage",
            "GAA",
            "Shutouts",
            "Losses",
            "Wins"
          ],
        datasets: goalieData
      },
      options: {
        scales: {
          display: false
        }
      }
    });

  }

  buildPlayerRadarChart(playerData: Chart.ChartDataSets[]): void {

    if (this.playerChart !== undefined)
      this.playerChart.data.datasets = playerData;

    this.playerChart = new Chart(this.playerChartRef.nativeElement, {
      type: 'radar',
      data: {
        labels:
          ['Goals',
            'Assists',
            'Points',
            'PPG',
            'Shots Blocked',
            'Even Shots',
            'Face Off Percentage',
            'Hits',
            'Overtime Goals',
            'Power Play Points',
            'Shot Percentage',
            'SSH',
          ],
        datasets: playerData
      },
      options: {
        scales: {
          display: false
        }
      }
    });

  }

  getPlayerRadarChartData(allSelectedPlayers: TeamPlayer[]): Chart.ChartDataSets[] {

    let data: Chart.ChartDataSets[] = [];

    allSelectedPlayers.forEach(player => {

      let dataSet: Chart.ChartDataSets = {
        data: [],
        label: ""
      };

      dataSet.data = [player.overallStats.stats[0].splits[0].stat.goals,
      player.overallStats.stats[0].splits[0].stat.assists,
      player.overallStats.stats[0].splits[0].stat.points,
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
      dataSet.backgroundColor = Constants.teamColours[player.playerInfo.currentTeam.id];

      data.push(dataSet);

    });

    return data;

  }

  getGoalieRadarChartData(allSelectedGoalies: TeamPlayer[]): Chart.ChartDataSets[] {

    let data: Chart.ChartDataSets[] = [];

    allSelectedGoalies.forEach(goalie => {

      let dataSet: Chart.ChartDataSets = {
        data: [],
        label: ""
      };

      dataSet.data = [goalie.overallStats.stats[0].splits[0].stat.savePercentage,
      goalie.overallStats.stats[0].splits[0].stat.goalAgainstAverage,
      goalie.overallStats.stats[0].splits[0].stat.shutouts,
      goalie.overallStats.stats[0].splits[0].stat.losses,
      goalie.overallStats.stats[0].splits[0].stat.wins
      ];

      dataSet.label = goalie.person.fullName;

      // each player color is based on their main team color
      dataSet.backgroundColor = Constants.teamColours[goalie.playerInfo.currentTeam.id];

      data.push(dataSet);

    });

    return data;

  }
}


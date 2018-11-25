import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TeamPlayer } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { DashboardService } from '@app/core/services/dashboard.service';
import { switchMap, first, distinct, distinctUntilChanged } from 'rxjs/operators';
import { pipe } from 'rxjs';

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
  currentSelectedPlayerNumber: any[] = [{id: 0, numberOfPlayers: 0},{id: 1, numberOfPlayers: 0}];
  numberOfPlayers = 0;

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

  showPlayers(players: any) {

      let playerSelection = this.currentSelectedPlayerNumber.filter(x => x.id === players.id);
      
      let totalPlayers = 0;

      playerSelection[0].numberOfPlayers = players.numberOfPlayers;

      this.currentSelectedPlayerNumber.filter(x => x.id === players.id)[0] = playerSelection;

      this.currentSelectedPlayerNumber.forEach(x => {
        
        totalPlayers += x.numberOfPlayers 

      });

      this.dashboardService.updatePlayerCount(totalPlayers);
      this.getTotalPlayers();
    }

    getTotalPlayers(): void {
      this.dashboardService.playersAdded.pipe(first()).subscribe(players => this.numberOfPlayers = players);
    }

}


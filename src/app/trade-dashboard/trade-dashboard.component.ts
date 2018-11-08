import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { NhlDataService } from '@app/core/services/nhl-data.service';
import { TeamRoster, TeamPlayer, PlayerInfo } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { TourService } from 'ngx-tour-md-menu';

import { Team } from '@app/core/interfaces/team';
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

  ngAfterContentInit(): void {

  }

  loading = false;
  playerSet: TeamPlayer[] = [];
  isLoading = false;
  value = 0;
  fantasyTradeComponentIds: Array<string[]> = [["tour3", "tour4"], ["tour5", "tour6"]];

  constructor(private nhlDataService: NhlDataService, private tourService: TourService) {

  }

  startLoading(): void {
    this.loading = true;
  }

  endLoading(): void {
    this.loading = false;
  }

  ngOnInit(): void {;
    this.startLoading();
    this.getNhlPlayers();
  }

  showScore($event: number): void {

    console.log($event);

  }

  getNhlPlayers(): void {

    this.nhlDataService.getCurrentTeams().pipe(switchMap(team => team.teams)).forEach((team : Team) => {
      this.nhlDataService.getCurrentRoster(team.id).pipe(switchMap(player => player.roster)).forEach((teamPlayer: TeamPlayer) => {

        forkJoin([
          this.nhlDataService.getPlayerInfo(teamPlayer.person.link),
          this.nhlDataService.getCurrentSeasonPlayerStats(teamPlayer.person.link)
        ]).subscribe((data : any[]) => {

          teamPlayer.overallStats = data[1];
          teamPlayer.playerInfo = data[0].people[0].currentTeam.id;      
          teamPlayer.teamLogo = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data[0].people[0].currentTeam.id}.svg`;
          teamPlayer.image = `https://nhl.bamcontent.com/images/headshots/current/168x168/${data[0].people[0].id}.png`;
         
          this.playerSet.push(teamPlayer);

        }, error => console.error(error));
      });
    });

    this.endLoading();

  }

}


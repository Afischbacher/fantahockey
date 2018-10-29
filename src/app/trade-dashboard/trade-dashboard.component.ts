import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { NhlDataService } from '@app/core/services/nhl-data.service';
import { TeamRoster, TeamPlayer, PlayerInfo } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';
import { Person } from '@app/core/interfaces/person';
import { Team } from '@app/core/interfaces/team';

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

  ngOnInit(): void {
    this.startLoading();
    this.getTeams();
  }

  showScore($event: number): void {
    
    console.log($event);
  }


  async initializeTour() {

    this.tourService.initialize([{
      anchorId: 'tour1',
      content: 'Welcome to the NHL fantasy trade tool!',
      title: 'Welcome!',
      enableBackdrop: true
    }, {
      anchorId: 'tour2',
      content: "Use the menu to check out more features of the tool (it's a work in progress..)",
      title: 'The Menu',
      enableBackdrop: true
    }, {
      anchorId: 'tour3',
      content: 'Search for any active NHL player to see the latest stats for the current season',
      title: 'Search Players',
      enableBackdrop: true
    }, {
      anchorId: 'tour4',
      content: "Craft trades and watch the fantasy score points to help you make the best trade possible...(exciting I know!)",
      title: 'Fantasy Scores',
      enableBackdrop: true
    }]);

    await this.tourService.start();

    await localStorage.setItem(Constants.initalizedTour, "true");

  }

  getTeams() {

    let teams: Team[];
    this.nhlDataService.getCurrentTeams().subscribe(res => {

      teams = res.teams
      this.getSeasonPlayerData(teams);

    });

  }


  async getSeasonPlayerData(teams: Team[]) {

    let playerSet: TeamPlayer[] = [];

    teams.forEach(async (team) => {

      await this.nhlDataService.getCurrentRoster(team.id).pipe((switchMap((res: TeamRoster) => res.roster))).subscribe(async (teamPlayer: TeamPlayer) => {

      await  this.nhlDataService.getCurrentSeasonPlayerStats(teamPlayer.person.link).subscribe(async (stat) => {

          teamPlayer.overallStats = stat;
          teamPlayer.image = `https://nhl.bamcontent.com/images/headshots/current/168x168/${teamPlayer.person.id}.png`;
          this.getPlayerInfo(teamPlayer);
        });
      });
    });



  }

  getPlayerInfo(teamPlayer: TeamPlayer) {

    this.nhlDataService.getPlayerInfo(teamPlayer.person.link).subscribe((playerInfo: any) => {

      teamPlayer.playerInfo = playerInfo.people[0];
      this.playerSet.push(teamPlayer);
      teamPlayer.teamLogo = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamPlayer.playerInfo.currentTeam.id}.svg`
    });
  
    this.endLoading();

  }

}


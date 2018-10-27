import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { NhlDataService } from '@app/core/services/nhl-data.service';
import { TeamRoster, TeamPlayer, PlayerInfo } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';
import { Person } from '@app/core/interfaces/person';

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
    this.stopLoading();
  }

  playerSet: TeamPlayer[] = [];
  isLoading = false;
  value = 0;
  fantasyTradeComponentIds: Array<string[]> = [["tour3", "tour4"], ["tour5", "tour6"]];

  constructor(private nhlDataService: NhlDataService, private tourService: TourService) {

  }

  ngOnInit(): void {

    this.getPlayerData();
    //this.initializeTour();
  }

  showScore($event: number): void {
    console.log("event");
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

  async getPlayerData() {

    const teams = await this.nhlDataService.getCurrentTeams().pipe(switchMap(val => val.teams));

    teams.forEach(async (team) => {

      await this.nhlDataService.getCurrentRoster(team.id).pipe((switchMap((res: TeamRoster) => res.roster))).subscribe(async (teamPlayer: TeamPlayer) => {
        
        await this.nhlDataService.getCurrentSeasonPlayerStats(teamPlayer.person.link).subscribe(async (stat) =>{ 

          await this.nhlDataService.getPlayerInfo(teamPlayer.person.link).subscribe((playerInfo: any) => { teamPlayer.playerInfo = playerInfo; });
          
          teamPlayer.overallStats = await stat;
          
        });

        teamPlayer.image = `https://nhl.bamcontent.com/images/headshots/current/168x168/${teamPlayer.person.id}.png`
        await this.playerSet.push(teamPlayer);

      });
    });


  }

  startLoading() {
    this.isLoading = false;
  }

  stopLoading() {
    this.isLoading = true;
  }
}


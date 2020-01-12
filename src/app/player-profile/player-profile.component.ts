import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { Constants } from '@app/core/constants/constants';
import { GameLogStats, Split } from '@app/core/interfaces/player-season-game-log';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(":enter", [
        style({ opacity: "0" }),
        animate('.3s ease-in', style({ opacity: "1" })),
      ]),
    ])
  ]
})
export class PlayerProfileComponent implements OnInit {
  playerId: number;
  playerProfile: any = {};
  playerImage: string;
  playerTeamLogo: string;
  playerTeamColour: string;
  seasonGameByGameStatistics: Split[] = [];
  seasonGameByGameStatisticsSubject = new Subject<Split[]>();
  playerDataSubject = new Subject<any>();
  currentPlayer = new Subject<any>();
    
  constructor(
      private route: ActivatedRoute, 
      private nhlDataService: NhlDataService, 
      private router: Router, private http: HttpClient) {

      this.playerId =+ this.route.snapshot.paramMap.get('playerid');

  }
  
  ngOnInit(): void {

    this.nhlDataService.getPlayerProfile(this.playerId).subscribe(playerInfo => {
      this.currentPlayer.next(playerInfo.people[0]);
      this.getPlayerData(playerInfo);
      this.getCurrentSeasonGameLogData(playerInfo.people[0].link);
      
    }, (error) => {
      this.playerProfile = null;
    });

  }
 
  backToDashboard(): void {
    this.router.navigate(['/dashboard']);

  }

  getPlayerData(playerInfo: any): void {

    this.playerProfile = playerInfo.people[0];
    this.getPlayerPosition(this.playerProfile.primaryPosition.code);
    this.playerImage = `https://nhl.bamcontent.com/images/headshots/current/168x168/${this.playerId}.png`;
    this.playerTeamLogo = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${playerInfo.people[0].currentTeam.id}.svg`;
    this.playerTeamColour = Constants.teamColours[playerInfo.people[0].currentTeam.id];

  }

  async getCurrentSeasonGameLogData(link: string): Promise<void> {

    await this.nhlDataService.getCurrentSeasonPlayerGameLogStats(link).subscribe((gameLog: GameLogStats) => {
      this.seasonGameByGameStatistics = gameLog.stats[0].splits;
      this.seasonGameByGameStatisticsSubject.next(this.seasonGameByGameStatistics);
    });

  }

  async getPlayerPosition(playerPosition: string) : Promise<void> {
    await this.playerDataSubject.next(playerPosition);
  }

  private formatSeason(season: string) {
      let dash = '-';
      var season = [season.slice(0, 4),dash,season.slice(4,season.length)].join('');
      return season;
  }

  private getDefaultImage(){
   var defaultImage = './../../assets/default-player.png';
   this.playerImage =  defaultImage;

  }

}

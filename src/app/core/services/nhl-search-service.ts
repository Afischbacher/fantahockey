import { Injectable } from "@angular/core";
import { NhlDataService } from "./nhl-data.service";
import { switchMap, filter } from "rxjs/operators";
import { TeamPlayer } from "../interfaces/roster";
import { forkJoin } from "rxjs";
import { Team } from "../interfaces/team";

@Injectable({
    providedIn: 'root'
})
export class NhlSearchService {

    constructor(private nhlDataService: NhlDataService){}

    searchNhlPlayers(query: string): TeamPlayer[] {

    let playerSearchResults: TeamPlayer[] = [];

    this.nhlDataService.getCurrentTeams().pipe(switchMap(team => team.teams)).forEach((team : Team) => {
        this.nhlDataService.getCurrentRoster(team.id).pipe(switchMap(player => player.roster))
        .pipe(filter((x : TeamPlayer) => query.length > 0 && x.person.fullName.toLowerCase().indexOf(query.toLowerCase()) >= 0))
        .forEach((teamPlayer: TeamPlayer) => {
  
          forkJoin([
            this.nhlDataService.getPlayerInfo(teamPlayer.person.link),
            this.nhlDataService.getCurrentSeasonPlayerStats(teamPlayer.person.link)
  
          ]).subscribe((data : any[]) => {
  
            teamPlayer.overallStats = data[1];
            teamPlayer.playerInfo = data[0].people[0].currentTeam.id;      
            teamPlayer.teamLogo = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data[0].people[0].currentTeam.id}.svg`;
            teamPlayer.image = `https://nhl.bamcontent.com/images/headshots/current/168x168/${data[0].people[0].id}.png`;
           
            playerSearchResults.push(teamPlayer);
  
          }, error => console.error(error));
        });
      });
      
      return playerSearchResults;
    }
}
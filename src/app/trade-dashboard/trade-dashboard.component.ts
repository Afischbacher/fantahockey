import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { HttpClient } from '@angular/common/http';
import { TeamRoster, TeamPlayer, OverallStats } from '@app/core/interfaces/roster';
import { Team } from '@app/core/interfaces/team';

@Component({
  selector: 'trade-dashboard',
  templateUrl: './trade-dashboard.component.html',
  styleUrls: ['./trade-dashboard.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  ngAfterViewChecked(): void { }

  playerControl = new FormControl();
  teams: Team[];
  filteredPlayerSet: TeamPlayer[] = [];
  playerSet: TeamPlayer[] = [];
  currentScore: number = 0.00;
  currentPlayerSelection : TeamPlayer[] = [];

  constructor(private nhlDataService: NhlDataService, private http: HttpClient) {

    this.playerControl.valueChanges.pipe(startWith('')).subscribe((query: string) => {

      if (query.length < 2) this.filteredPlayerSet = [];

      if (query.length >= 3)
        this.filteredPlayerSet = this.playerSet.filter(x => x.person.fullName.toLowerCase().includes(query.toLowerCase()));


    }, error => {
      console.log(error);
    })
  }

   ngOnInit(): void {
     this.getPlayerData();
  }

 async getPlayerData() {

    const teams = await this.nhlDataService.getCurrentTeams().pipe(switchMap(val => val.teams));

    teams.forEach(async (team) => {

        await this.nhlDataService.getCurrentRoster(team.id).pipe((switchMap((res: TeamRoster) => res.roster))).subscribe(async (teamPlayer: TeamPlayer) => {
        await this.nhlDataService.getCurrentSeasonPlayerStats(teamPlayer.person.link).subscribe(async (stat) =>  teamPlayer.overallStats = await stat);
        await this.playerSet.push(teamPlayer);

      });

    });  
  }

  addPlayerToList(player: TeamPlayer){
      this.currentPlayerSelection.push(player);
      this.calculateFantasyScore(player);
      
  }

  async calculateFantasyScore(player: TeamPlayer) {
    let lastYear = 0;

    await this.nhlDataService.getLastSeasonPlayerStats(player.person.link).subscribe(async (lastYearPlayer: OverallStats) => {
    
      if(player.position.abbreviation !== "G"){
        lastYear = 
        (   lastYearPlayer.stats[0].splits[0].stat.assists * 0.3
         +  lastYearPlayer.stats[0].splits[0].stat.goals * 0.7
         +  lastYearPlayer.stats[0].splits[0].stat.plusMinus * 0.15
         +  lastYearPlayer.stats[0].splits[0].stat.hits * 0.05
         +  lastYearPlayer.stats[0].splits[0].stat.shots * 0.075) * 0.5;
   
         this.currentScore += 
         (player.overallStats.stats[0].splits[0].stat.assists * 0.3
         +  player.overallStats.stats[0].splits[0].stat.goals * 0.7
         +  player.overallStats.stats[0].splits[0].stat.plusMinus * 0.15
         +  player.overallStats.stats[0].splits[0].stat.hits * 0.05
         +  player.overallStats.stats[0].splits[0].stat.shots * 0.075) + lastYear;
      }
      else{

      lastYear = 
     (   lastYearPlayer.stats[0].splits[0].stat.wins * 0.3
      +  lastYearPlayer.stats[0].splits[0].stat.savePercentage * 0.7
      +  lastYearPlayer.stats[0].splits[0].stat.goalAgainstAverage * 0.15
      +  lastYearPlayer.stats[0].splits[0].stat.gamesStarted * 0.05) * 0.5;

      this.currentScore += 
      (  lastYearPlayer.stats[0].splits[0].stat.wins * 0.3
        +  lastYearPlayer.stats[0].splits[0].stat.savePercentage * 0.7
        +  lastYearPlayer.stats[0].splits[0].stat.goalAgainstAverage * 0.15
        +  lastYearPlayer.stats[0].splits[0].stat.gamesStarted * 0.05) + lastYear;


      }
    });

  }

  displayPlayerName(player: TeamPlayer){
    return player ? player.person.fullName : '';
  }
}


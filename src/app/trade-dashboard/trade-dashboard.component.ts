import { Component, OnInit, AfterViewChecked } from '@angular/core';
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

  constructor(private nhlDataService: NhlDataService, private http: HttpClient) {

    this.playerControl.valueChanges.pipe(startWith('')).subscribe((query: string) => {
      if (query.length < 2) this.filteredPlayerSet = [];

      if (query.length > 3)
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

        await this.nhlDataService.getPlayerStats(teamPlayer.person.link).subscribe(async (stat) =>  teamPlayer.overallStats = await stat);
        await this.playerSet.push(teamPlayer);

      });

    });
    }
}


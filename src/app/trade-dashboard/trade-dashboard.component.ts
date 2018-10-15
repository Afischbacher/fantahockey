import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { startWith, switchMap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { HttpClient } from '@angular/common/http';
import { TeamRoster, TeamPlayer, OverallStats } from '@app/core/interfaces/roster';
import { Team } from '@app/core/interfaces/team';
import { trigger, transition, style, animate } from '@angular/animations';

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

  constructor(private nhlDataService: NhlDataService) {

  }

  ngOnInit(): void {    
    this.startLoading();
    this.getPlayerData();
  }

  async getPlayerData() {

    const teams = await this.nhlDataService.getCurrentTeams().pipe(switchMap(val => val.teams));

    teams.forEach(async (team) => {

        await this.nhlDataService.getCurrentRoster(team.id).pipe((switchMap((res: TeamRoster) => res.roster))).subscribe(async (teamPlayer: TeamPlayer) => {
        await this.nhlDataService.getCurrentSeasonPlayerStats(teamPlayer.person.link).subscribe(async (stat) => teamPlayer.overallStats = await stat);
        await this.playerSet.push(teamPlayer);
      });
    });
  }

   startLoading(){
    this.isLoading = false;
  }

  stopLoading(){
      this.isLoading = true;
  }
}


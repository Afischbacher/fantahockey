import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { trigger, transition, style, animate } from '@angular/animations';
import { Version } from '@app/core/models/version';
import { ActivatedRoute, Router } from '@angular/router';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { TeamPlayer } from '@app/core/interfaces/roster';
import { switchMap } from 'rxjs/operators';
import { Constants } from '@app/core/constants/constants';

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
  constructor(private route: ActivatedRoute, private nhlDataService : NhlDataService, private router: Router) { 
    
    this.route.params.subscribe(params => this.playerId = params  ['playerid']);
    this.nhlDataService.getPlayerProfile(this.playerId).subscribe(playerInfo => {
      this.playerProfile = playerInfo.people[0];
      this.playerImage = `https://nhl.bamcontent.com/images/headshots/current/168x168/${this.playerId}.png`;
      this.playerTeamLogo = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${playerInfo.people[0].currentTeam.id}.svg`;
      this.playerTeamColour = Constants.teamColours[playerInfo.people[0].currentTeam.id];

      console.log(this.playerProfile);
      
    });

  }
  ngOnInit() { }

  backToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}

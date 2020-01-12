import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { Game } from '@app/core/interfaces/game-scores';
import * as moment from 'moment';

@Component({
  selector: 'nhl-scores',
  templateUrl: './nhl-score.component.html',
  styleUrls: ['./nhl-score.component.scss'],
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
export class NhlScoreComponent implements OnInit, AfterContentInit {

  constructor(private nhlDataService: NhlDataService) { }


  public gameDate: string;
  public gameScores: Game[];

  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
    this.getGameScores();
  }

  private getGameScores() {

    this.gameDate = moment().format("MMMM Do YYYY").toString();
    this.nhlDataService.getGameSchedule().subscribe((gameScores) => {
   
      this.gameScores = gameScores.dates[0].games;

    });
  }

  private getLiveFeeds(){
    this.gameScores.forEach(gameScore => {
         
      this.nhlDataService.getLiveFeed(gameScore.gamePk).subscribe((liveGameFeed) => {
  
          gameScore.startTime = moment(liveGameFeed.gameData.datetime.dateTime).format("MMMM Do YYYY hh:mm:ss");
      });   
   });
  }  
}


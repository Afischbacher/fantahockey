import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import * as moment from 'moment';

@Component({
  selector: 'nhl-news',
  templateUrl: './nhl-news.component.html',
  styleUrls: ['./nhl-news.component.scss'],
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
export class NhlNewsComponent implements OnInit, AfterContentInit {

  constructor(private nhlDataService: NhlDataService) { }


  public newsDate: string;

  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
    this.newsDate = moment().format("MMMM Do YYYY").toString();
    this.getNhlNews();
  }

  private getNhlNews(){
    
  }

}


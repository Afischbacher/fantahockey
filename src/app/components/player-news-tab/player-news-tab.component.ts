import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PlayerNewsService } from '@app/core/services/player-news.service';
import { PlayerInfo } from '@app/core/interfaces/roster';
import { Subject, forkJoin } from 'rxjs';


@Component({
    selector: 'player-news-tab',
    styleUrls: ["./player-news-tab.component.scss"],
    templateUrl: "./player-news-tab.component.html"
})
export class PlayerNewsTabComponent implements OnInit {

    @Input() playerData: Subject<any>;
    currentPlayerFullName: string;
    newsData : any[];

    constructor(private playerNewsService: PlayerNewsService) { }

    ngOnInit(): void {
        this.playerData.subscribe((data : PlayerInfo) => {
            this.getPlayerNews(data.fullName);
      
        }, error => console.log(error))
    }

    getPlayerNews(query: string) {
        this.playerNewsService.getPlayerNews(query).subscribe(newsData => {
            this.newsData = (<any>newsData).articles;
        }, error => console.log(error))
    }
}
import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Split } from '@app/core/interfaces/player-season-game-log';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
    selector: 'season-stats-mat-table',
    styleUrls: ["./season-stats-mat-table.component.scss"],
    templateUrl: "./season-stats-mat-table.component.html"
})
export class SeasonStatsMatTableComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.gameLogDataSubject.unsubscribe();
        this.playerPositionSubject.unsubscribe();
    }

    @Input() gameLogDataSubject: Subject<Split[]>;
    @Input() playerPositionSubject: Subject<any>;
    gameLogTableData: MatTableDataSource<Split>;
    playerPosition: string;
    displayedColumns: string[] =
        [
            'date',
            'opponent.name',
            'stat.timeOnIce',
            'stat.goals',
            'stat.assists',
            'stat.points',
            'stat.blocked',
            'stat.shotPct',
            'stat.shots',
            'stat.plusMinus',
            'stat.pim',
            'stat.shots',
            'stat.shifts',
            'stat.shortHandedGoals',
            'stat.shortHandedPoints',
            'stat.overTimeGoals',
            'stat.faceOffPct',
            'stat.powerPlayGoals',
            'stat.powerPlayPoints',
            'stat.powerPlayTimeOnIce',

        ];
    @ViewChild(MatPaginator) gameStatsPaginator: MatPaginator;
    @ViewChild(MatSort) gameStatsSort: MatSort;

    constructor() { }

    ngOnInit(): void {

        this.gameLogDataSubject.subscribe(gameLogData => {
            console.log(gameLogData);
            this.gameLogTableData = new MatTableDataSource<Split>(gameLogData);
            this.gameLogTableData.paginator = this.gameStatsPaginator;
            this.gameLogTableData.sort = this.gameStatsSort;

        });

        this.playerPositionSubject.subscribe(playerPosition => {
            this.playerPosition = playerPosition;
        });
    }

    filterGameLogData(value: string) {
        this.gameLogTableData.filter = value.toLowerCase().trim();
    }


}
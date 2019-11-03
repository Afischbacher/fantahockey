import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Split } from '@app/core/interfaces/player-season-game-log';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Constants } from '@app/core/constants/constants';

@Component({
    selector: 'season-stats-mat-table',
    styleUrls: ["./season-stats-mat-table.component.scss"],
    templateUrl: "./season-stats-mat-table.component.html"
})
export class SeasonStatsMatTableComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.gameLogDataSubject.unsubscribe();
        this.playerDataSubject.unsubscribe();
    }

    @Input() gameLogDataSubject: Subject<Split[]>;
    @Input() playerDataSubject: Subject<any>;
    gameLogTableData: MatTableDataSource<Split>;
    playerPosition: string;
    saves: number;
    totalShotsAgainst: number;

    displayedColumnsPlayer: string[] =
        [
            'date',
            'opponent.name', 
            'stat.goals',
            'stat.assists',
            'stat.points',   
            'stat.shots',
            'stat.blocked',
            'stat.shotPct',
            'stat.faceOffPct',
            'stat.plusMinus',  
            'stat.pim',
            'stat.shifts',
            'stat.shortHandedGoals',
            'stat.shortHandedPoints',
            'stat.overTimeGoals',
            'stat.powerPlayGoals',
            'stat.powerPlayPoints',
            'stat.timeOnIce',
            'stat.powerPlayTimeOnIce',
           
        ];

    displayedColumnsGoalie: string[] = [
        'date',
        'opponent.name',
        'stat.gamesStarted',
        'stat.decision',
        'stat.savePercentage',
        'stat.evenStrengthSavePercentage',
        'stat.powerPlaySavePercentage',
        'stat.evenSaves',
        'stat.evenShots',
        'stat.saves',
        'stat.shotsAgainst',
        'stat.powerPlaySaves',
        'stat.powerPlayShots',
        'stat.shortHandedSaves',
        'stat.shortHandedShots',
        'stat.shutouts',
        'stat.timeOnIce'
    ];

    @ViewChild(MatPaginator) gameStatsPaginator: MatPaginator;
    @ViewChild(MatSort) gameStatsSort: MatSort;

    constructor() { }

    ngOnInit(): void {

        this.gameLogDataSubject.subscribe(gameLogData => {
            this.gameLogTableData = new MatTableDataSource<Split>(gameLogData);
            this.gameLogTableData.paginator = this.gameStatsPaginator;
            this.gameLogTableData.sort = this.gameStatsSort;

        });

        this.playerDataSubject.subscribe(playerPosition => {
            this.playerPosition = playerPosition;
        });
    }

    filterGameLogData(value: string) {
        this.gameLogTableData.filter = value.toLowerCase().trim();
    }

    getTotalGoals() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.goals).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalToi() {
        return this.timeOnIceParse(<any[]>this.gameLogTableData.data, Constants.typesOfTimeOnIce.timeOnIce);
    }

    getTotalAssists() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.assists).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalPoints() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.points).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalShotsBlocked() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.blocked).reduce((prev, curr) => prev + curr, 0);
    }

    getAvgShotPct() {
        var shotPct = (<any[]>this.gameLogTableData.data).filter(x => x.stat.shotPct);
        if (shotPct.length === 0) return 0.00;
        return (shotPct
            .map(x => x.stat.shotPct)
            .reduce((prev, curr) => parseFloat(prev) + parseFloat(curr), 0) / shotPct.length).toFixed(2);

    }

    getTotalShots() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.shots).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalPlusMinus() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.plusMinus).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalPim() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.pim).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalShg() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.shortHandedGoals).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalShp() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.shortHandedPoints).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalShifts() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.shifts).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalOvertimeGoals() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.overTimeGoals).reduce((prev, curr) => prev + curr, 0);
    }

    getAvgFaceOffPct() {
        var faceOffPct = (<any[]>this.gameLogTableData.data).filter(x => x.stat.faceOffPct);
        if (faceOffPct.length === 0) return 0.00;
        return (faceOffPct.map(x => x.stat.faceOffPct).reduce((prev, curr) => parseFloat(prev) + parseFloat(curr), 0) / faceOffPct.length).toFixed(2);
    }

    getTotalPpg() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.powerPlayGoals).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalPpp() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.powerPlayPoints).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalPpToi() {
        return this.timeOnIceParse(<any[]>this.gameLogTableData.data, Constants.typesOfTimeOnIce.powerPlayTimeOnIce);
    }

    getWinsLossesOtTotals() {
        var decisions = (<any[]>this.gameLogTableData.data).map(x => x.stat.decision);
        var wins = decisions.filter(x => x === 'W').length;
        var losses = decisions.filter(x => x === 'L').length;
        var overtime = decisions.filter(x => x === 'O').length;
        return `${wins}-${losses}-${overtime}`;
    }

    getTotalEvenSaves() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.evenSaves).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalEvenShots() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.evenShots).reduce((prev, curr) => prev + curr, 0);
    }

    getAvgEvenSavePct() {
        return ((<any[]>this.gameLogTableData.data).map(x => x.stat.evenStrengthSavePercentage).reduce((prev, curr) => prev + curr, 0) / this.gameLogTableData.data.length).toFixed(2);
    }

    getTotalGs() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.gamesStarted).filter(x => x !== undefined).reduce((prev, curr) => prev + curr, 0);
    }

    getAvgPowerplaySv() {
        return ((<any[]>this.gameLogTableData.data).map(x => x.stat.powerPlaySavePercentage).filter(x => x !== undefined).reduce((prev, curr) => prev + curr, 0) / this.gameLogTableData.data.length).toFixed(2);
    }

    getTotalPowerPlaySaves() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.powerPlaySaves).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalPowerPlayShots() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.powerPlayShots).reduce((prev, curr) => prev + curr, 0);
    }

    getAvgSv() {

        this.saves = (<any[]>this.gameLogTableData.data).map(x => x.stat.saves).reduce((prev, curr) => prev + curr, 0);
        this.totalShotsAgainst = (<any[]>this.gameLogTableData.data).map(x => x.stat.shotsAgainst).reduce((prev, curr) => prev + curr, 0);
        return (this.saves / this.totalShotsAgainst).toFixed(3);
    }

    getTotalSaves() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.saves).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalShSv() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.shortHandedSaves).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalShs() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.shortHandedShots).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalShutouts() {
        return (<any[]>this.gameLogTableData.data).map(x => x.stat.shutouts).reduce((prev, curr) => prev + curr, 0);
    }

    getTotalSa() {

        return (<any[]>this.gameLogTableData.data).map(x => x.stat.shotsAgainst).reduce((prev, curr) => prev + curr, 0);
    }

    private timeOnIceParse(stats: any[], type: number) {
        let min = 0;
        let sec = 0;

        stats.forEach(x => {
            var times = type != 2 ? x.stat.timeOnIce.split(":") : x.stat.powerPlayTimeOnIce.split(":");
            min += parseInt(times[0]);
            sec += parseInt(times[1]);
        });

        let secMin = Math.floor(sec / 60);
        var seconds = sec - secMin * 60;

        min += secMin;
        return `${min}:${seconds}`;
    }


}
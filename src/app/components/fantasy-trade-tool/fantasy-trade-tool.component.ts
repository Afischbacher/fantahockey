import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { startWith, distinctUntilChanged, first } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { TeamPlayer, OverallStats } from '@app/core/interfaces/roster';
import { Team } from '@app/core/interfaces/team';
import { trigger, transition, style, animate } from '@angular/animations';
import { TourService } from 'ngx-tour-md-menu';
import { BehaviorSubject } from 'rxjs';
import { Constants } from '@app/core/constants/constants';
import { parse } from 'babylon';

@Component({
    selector: 'fantasy-trade-tool',
    templateUrl: './fantasy-trade-tool.component.html',
    styleUrls: ['./fantasy-trade-tool.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition(":enter", [
                style({ opacity: "0" }),
                animate('.3s ease-in', style({ opacity: "1", transition: "all .3s" })),
            ]),
        ]),
        trigger('fadeOut', [
            transition(":leave", [
                style({ opacity: "1" }),
                animate('.3s ease-out', style({ opacity: "0", transition: "all .3s" })),
            ]),
        ]),

    ],
})
export class FantasyTradeToolComponent implements OnInit, AfterViewChecked {

    ngAfterViewChecked(): void { }

    playerControl = new FormControl({ disabled: false });
    teams: Team[];
    filteredPlayerSet: TeamPlayer[] = [];
    @Input() playerSet: TeamPlayer[] = [];
    @Input() tourIds: string[] = [];
    @Output() scoreValueChange = new EventEmitter<number>();
    currentScore: number = 0.00;
    currentPlayerSelection: TeamPlayer[] = [];
    disableSearch: boolean = false;
    scoreSubject = new BehaviorSubject<number>(this.currentScore);

    fantasyPlayerSettings: any[] = localStorage.getItem(Constants.playerFantasyLeagueSettings) !== null
        ? JSON.parse(localStorage.getItem(Constants.playerFantasyLeagueSettings))
        : Constants.fantasyPlayerSettings;

    fantasyGoalieSettings: any[] = localStorage.getItem(Constants.goalieFantasyLeaugeSettings) !== null
        ? JSON.parse(localStorage.getItem(Constants.goalieFantasyLeaugeSettings))
        : Constants.fantasyGoalieSettings;


    constructor(private nhlDataService: NhlDataService, private tourService: TourService) {

        this.playerControl.valueChanges.pipe(startWith('')).subscribe((query: string) => {

            if (query.length < 2)
                this.filteredPlayerSet = [];

            if (query.length >= 3)
                this.filteredPlayerSet = this.playerSet.filter(x => x.person.fullName.toLowerCase().includes(query.toLowerCase()));

        }, error => {
            console.log(error);
        });

    }

    trackByPlayers(i: number) {
        return i;
    }

    ngOnInit(): void { }

    addPlayerToList(player: TeamPlayer) {
        const newPlayer = this.currentPlayerSelection
            .findIndex(x => x.person == player.person && x.position == player.position && x.jerseyNumber == player.jerseyNumber)

        if (this.currentPlayerSelection.length < 6 && newPlayer < 0) {

            this.currentPlayerSelection.push(player);
            this.toggleSearch();

            let fantasyPlayer = this.calculateFantasyScore(player);
            fantasyPlayer = this.calculateLastYearFantasyScore(fantasyPlayer);
            this.scoreValueChange.emit(this.currentScore);

        }

        this.toggleSearch();

    }

    calculateLastYearFantasyScore(player: TeamPlayer): TeamPlayer {

        player.lastYearFantasyScore = 0;

        this.nhlDataService.getLastSeasonPlayerStats(player.person.link).subscribe((lastYearPlayer: OverallStats) => {

            if (player.position.abbreviation !== Constants.goaliePosition) {

                if (lastYearPlayer.stats[0].splits[0] !== undefined) {

                    const playerStats = lastYearPlayer.stats[0].splits[0].stat;

                    for (var key in playerStats) {
                        let setting = this.fantasyPlayerSettings.filter(x => x.value === key)[0];

                        player.lastYearFantasyScore += parseInt(playerStats[key]) * setting.settingValue;

                    }
                }
            }

            else {

                if (lastYearPlayer.stats[0].splits[0] !== undefined) {

                    const playerStats = lastYearPlayer.stats[0].splits[0].stat;

                    for (var key in playerStats) {
                        let setting = this.fantasyGoalieSettings.filter(x => x.value === key)[0];

                        player.lastYearFantasyScore += parseInt(playerStats[key]) * setting.settingValue;

                    }
                }
            }

        });

        console.log(player);
        return player;

    }

    calculateFantasyScore(player: TeamPlayer): TeamPlayer {

        player.fantasyScore = 0;

        if (player !== null && player.position.abbreviation !== Constants.goaliePosition) {

            const playerStats = player.overallStats.stats[0].splits[0].stat;

            for (var key in playerStats) {

                let setting = this.fantasyPlayerSettings.filter(x => x.value === key)[0];

                this.currentScore += parseInt(playerStats[key]) * setting.settingValue;
                player.fantasyScore += parseInt(playerStats[key]) * setting.settingValue;

            }

        }

        else if (player !== null && player.position.abbreviation === Constants.goaliePosition) {

            const goalieStats = player.overallStats.stats[0].splits[0].stat;

            for (var key in goalieStats) {

                let settings = this.fantasyGoalieSettings.filter(x => x.value === key)[0];

                this.currentScore += parseInt(goalieStats[key]) * settings.settingValue;
                player.fantasyScore += parseInt(goalieStats[key]) * settings.settingValue;

            }
        }

        else {

            throw Error("Team player does not have a proper position");
        }

        return player;
    }

    displayPlayerName(player: TeamPlayer) {
        return player && player.person && player.person.fullName ? player.person.fullName : '';
    }

    toggleSearch(): void {

        this.currentPlayerSelection.length < 6 ? this.playerControl.enable() : this.playerControl.disable();

    }

    removePlayer(player: TeamPlayer) {

        const playerToRemove = this.currentPlayerSelection.indexOf(player, 0);

        this.currentPlayerSelection.splice(playerToRemove, 1);

        this.toggleSearch();

        this.currentScore = this.currentScore - player.fantasyScore >= 0 ? this.currentScore - player.fantasyScore : 0;
    }

    trackPlayerBy(index: number, item: any) {
        return index;
    }
}


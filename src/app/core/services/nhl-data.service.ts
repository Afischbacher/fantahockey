import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NhlPlayerProfile } from '@app/core/interfaces/nhl-player-profile';
import { CurrentLeauge } from '@app/core/interfaces/current-leauge';
import { Constants } from '../constants/constants';
@Injectable()
export class NhlDataService {

    currentSeason: string;
    lastSeason: string;
    constructor(private http: HttpClient) { }

    searchPlayers(searchString: string): Observable<any> {
        return this.http.get<any>(`https://statsapi.web.nhl.com/api/v1/people/${searchString}`)
    }

    getCurrentTeams(): Observable<CurrentLeauge> {
        return this.http.get<CurrentLeauge>(`https://statsapi.web.nhl.com/api/v1/teams`);
    }

    getCurrentRoster(id: number): Observable<any> {
        return this.http.get(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`);
    }

    getCurrentSeasonPlayerStats(link: string): Observable<any> {
        return this.http.get(`https://statsapi.web.nhl.com${link}/stats/?stats=statsSingleSeason&season=${this.getCurrentSeason()}`)
    }

    getPlayerStatsBasedOnYear(link: string, year: string) {
        return this.http.get(`https://statsapi.web.nhl.com${link}/stats/?stats=statsSingleSeason&season=${year}`)
    }

    getLastSeasonPlayerStats(link: string): Observable<any> {
        return this.http.get(`https://statsapi.web.nhl.com${link}/stats/?stats=statsSingleSeason&season=${this.getLastSeason()}`)
    }

    getPlayerInfo(link: string) {
        return this.http.get(`https://statsapi.web.nhl.com/${link}`)
    }

    getPlayerProfile(id: number): Observable<any> {
        return this.http.get(`https://statsapi.web.nhl.com/api/v1/people/${id}`);
    }

    getCurrentSeasonPlayerGameLogStats(link: string): Observable<any> {
        return this.http.get(`https://statsapi.web.nhl.com${link}/stats/?stats=gameLog&season=${this.getCurrentSeason()}`)
    }
    
    private getLastSeason(): string {

        let selectedSeason = null;
        let seasons = Constants.nhlSeasons;
        let currentTime = Math.round(new Date().getTime() / 1000)
        seasons.forEach(season => {
            if (currentTime > season.unixCode[0] && currentTime <= season.unixCode[1])
                selectedSeason = season.seasonCode[0];

        });

        return selectedSeason;
    }

    private getCurrentSeason(): string {

        let selectedSeason = null;
        let seasons = Constants.nhlSeasons;
        let currentTime = Math.round(new Date().getTime() / 1000)
        seasons.forEach(season => {
            if (currentTime > season.unixCode[0] && currentTime <= season.unixCode[1])
                selectedSeason = season.seasonCode[1];

        });

        return selectedSeason;
    }

}
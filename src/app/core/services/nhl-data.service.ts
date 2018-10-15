import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NhlPlayerProfile } from '@app/core/interfaces/nhl-player-profile';
import { CurrentLeauge } from '@app/core/interfaces/current-leauge';

@Injectable()
export class NhlDataService {

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

    getLastSeason(): string {

        if(new Date(`2019-01-01`) < new Date())
            return `${new Date().getFullYear() - 2}${new Date().getFullYear() - 1}`;
        else
            return `${new Date().getFullYear() - 1}${new Date().getFullYear()}`;    
        
    }

    getCurrentSeason(): string {
   
        if(new Date(`2019-01-01`) < new Date())
            return `${new Date().getFullYear() - 1}${new Date().getFullYear()}`;
        else
            return `${new Date().getFullYear()}${new Date().getFullYear() + 1}`;

    }
}
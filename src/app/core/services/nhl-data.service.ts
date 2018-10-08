import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NhlPlayerProfile } from '@app/core/interfaces/nhl-player-profile';
import { CurrentLeauge } from '@app/core/interfaces/current-leauge';

@Injectable()
export class NhlDataService {

    constructor(private http: HttpClient){}

    searchPlayers(searchString: string) : Observable<any> {

       return this.http.get<any>(`https://statsapi.web.nhl.com/api/v1/people/${searchString}`)
    }

    getCurrentTeams(): Observable<CurrentLeauge>{
        return this.http.get<CurrentLeauge>(`https://statsapi.web.nhl.com/api/v1/teams`);
    }

    getCurrentRoster(id : number): Observable<any>{
        return this.http.get(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`);
    }

    getPlayerStats(link: string) : Observable<any>{
        return this.http.get(`https://statsapi.web.nhl.com${link}/stats/?stats=statsSingleSeason&season=20182019`)
    }

    getCurrentSeason(): string {
        return `${new Date().getFullYear}${new Date().getFullYear() + 1}`
    }
}
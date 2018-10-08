import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NhlPlayerProfile } from '@app/core/interfaces/nhl-player-profile';

@Injectable()
export class NhlDataService {

    constructor(private http: HttpClient){}

    searchPlayers(searchString: string) : Observable<any> {

       return this.http.get<any>(`https://statsapi.web.nhl.com/api/v1/people/${searchString}`)
    }

    getCurrentSeason() : string {
        return `${new Date().getFullYear()}${new Date().getFullYear()+1}`
    }
}
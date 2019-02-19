import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../constants/constants";

@Injectable()
export class PlayerNewsService {
    constructor(private http : HttpClient){
    }

    getPlayerNews(query: string) : Observable<{}>{
        return this.http.get<{}>(`${Constants.apiPrefix}${Constants.apiVersion}news/${query}`);
    }
}
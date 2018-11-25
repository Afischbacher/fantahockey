import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DashboardService {
    constructor(){}
    playersAdded = new BehaviorSubject<number>(0);

    updatePlayerCount(numberOfPlayers: number){
        this.playersAdded.next(numberOfPlayers);
    }
}
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { first } from "rxjs/operators";

@Injectable()
export class DashboardService {
    constructor(){}
    playersAdded = new BehaviorSubject<number>(0);

    updatePlayerCount(numberOfPlayers: number){
        this.playersAdded.next(numberOfPlayers);
    }

    getTotalPlayers(){
        return this.playersAdded.pipe(first())
    }
}
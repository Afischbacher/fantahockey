import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { first } from "rxjs/operators";
import { TeamPlayer } from "../interfaces/roster";

@Injectable()
export class DashboardService {
    constructor(){}
    playersAdded = new BehaviorSubject<number>(0);
    allPlayers = new BehaviorSubject<TeamPlayer[]>([]);

    updatePlayerCount(numberOfPlayers: number){
        this.playersAdded.next(numberOfPlayers);
    }

    updatePlayerSelection(players: TeamPlayer[]){
        this.allPlayers.next(players);
    }

    getTotalPlayers(){
        return this.playersAdded.pipe(first())
    }

    getAllSelectedPlayers(){
        return this.allPlayers.pipe(first());
    }
}
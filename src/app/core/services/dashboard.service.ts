import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { first, switchMap } from "rxjs/operators";
import { TeamPlayer } from "../interfaces/roster";

@Injectable()
export class DashboardService {
    constructor(){}
    playersAdded = new BehaviorSubject<number>(0);
    allPlayers = new BehaviorSubject<TeamPlayer[]>([]);
    fromPlayers = new BehaviorSubject<TeamPlayer[]>([]);
    toPlayers = new BehaviorSubject<TeamPlayer[]>([]);
    

    updatePlayerCount(numberOfPlayers: number){
        this.playersAdded.next(numberOfPlayers);
    }

    updatePlayerSelection(players: TeamPlayer[]){
        this.allPlayers.next(players);
    }

    getTotalPlayers(){
        return this.playersAdded.pipe(first())
    }

    getAllSelectedPlayers() : Observable<TeamPlayer[]> {
        return this.allPlayers.pipe(first());
    }

    updatePlayersFrom(players: TeamPlayer[]) : void {
        this.fromPlayers.next(players);
    }

    updatePlayersTo(players: TeamPlayer[]) : void {
        this.toPlayers.next(players);
    }

    getPlayersFromObservable() : Observable<TeamPlayer[]> {
        return this.fromPlayers.pipe(first());
    }

    getPlayersToObservable() : Observable<TeamPlayer[]> {
        return this.toPlayers.pipe(first());
    }
}
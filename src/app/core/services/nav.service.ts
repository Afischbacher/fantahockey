import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavService {
 
    public appDrawer: any;

    constructor(){}

    closeNav(){
        this.appDrawer.close();
    }

    openNav(){
        this.appDrawer.open();
    }

    toggleNav(){
        this.appDrawer.toggle();
    }
}
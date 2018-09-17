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
        console.log(this.appDrawer);
        this.appDrawer.open();
    }
}
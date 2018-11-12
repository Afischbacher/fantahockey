import { Injectable } from "@angular/core";
import { TourService } from "ngx-tour-md-menu";
import { Constants } from "../constants/constants";

@Injectable({
    providedIn: 'root'
})
export class AppTourService {
    
    constructor(private tourService: TourService) { }

    startTour(): void {

        this.tourService.initialize(Constants.appTour);

        this.tourService.start();
    }
}

import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { finalize, startWith, map } from 'rxjs/operators';

import { QuoteService } from '@app/trade-dashboard/trade-dashboard.service';
import { FormControl } from '@angular/forms';
import { NhlDataService } from '@app/core/services/nhl-data.service';
import { Observable, pipe } from 'rxjs';
import { NhlPlayerProfile } from '@app/core/interfaces/nhl-player-profile';
import { HttpClient } from '@angular/common/http';
import { Roster } from '@app/core/interfaces/roster';

@Component({
  selector: 'trade-dashboard',
  templateUrl: './trade-dashboard.component.html',
  styleUrls: ['./trade-dashboard.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  ngAfterViewChecked(): void {


  }

  playerControl = new FormControl();
  filteredPlayerSet : any[] = [];
  playerSet: any[] = [];

  constructor(private nhlDataService: NhlDataService, private http: HttpClient) {
    
    this.playerControl.valueChanges.pipe(startWith('')).subscribe(query  => {
        if(query.length > 2){
          
        }
    }, error => {
      console.log(error);
    })
  }

  ngOnInit() : void {

    for(let i = 1; i <= 30; i++){

      if(i === 11 || i === 27) {continue;}
      
      this.http.get(`https://statsapi.web.nhl.com/api/v1/teams/${i}/roster`)
        .subscribe((response: Roster) => {
            
            this.playerSet.push(response);

        }, error => console.error(error));
    }
  }

  

  private _filteredPlayers(value: string) {
     
     const filterValue = value.toLowerCase();

     let playerSet: any[];

     this.nhlDataService.searchPlayers(filterValue).subscribe((response: any) =>{
   
     this.filteredPlayerSet = response;
     console.log(response);

     this.filteredPlayerSet = response;
      
    }, error => console.log(error));
    
    }
}

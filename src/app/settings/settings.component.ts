import { Component, OnInit, AfterContentInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { NhlDataService } from '@app/core/services/nhl-data.service';
import { TeamRoster, TeamPlayer, PlayerInfo } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';
import { Person } from '@app/core/interfaces/person';
import { Team } from '@app/core/interfaces/team';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(":enter", [
        style({ opacity: "0" }),
        animate('.3s ease-in', style({ opacity: "1" })),
      ]),
    ]),
    trigger('fadeOut', [
      transition(":leave", [
        style({ opacity: "1" }),
        animate('.3s ease-out', style({ opacity: "0" })),
      ]),
    ]),

  ],
})
export class SettingsComponent implements OnInit, AfterContentInit {

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {

  }

  loading = false;
  settings = Constants.settings;
  settingsControl: FormControl;

  constructor(private nhlDataService: NhlDataService, private tourService: TourService) {

      this.settingsControl = new FormControl(null,{
        validators: Validators.required,
        updateOn: 'blur'
      });
  }

  submitSettings(form: any){
    console.log(form);
  }

  startLoading(): void {
    this.loading = true;
  }

  endLoading(): void {
    this.loading = false;
  }

}


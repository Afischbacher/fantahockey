import { Component, OnInit, AfterContentInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { NhlDataService } from '@app/core/services/nhl-data.service';
import { TeamRoster, TeamPlayer, PlayerInfo } from '@app/core/interfaces/roster';
import { trigger, transition, style, animate } from '@angular/animations';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';
import { Person } from '@app/core/interfaces/person';
import { Team } from '@app/core/interfaces/team';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { SettingsService } from '@app/core/services/settings.service';

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

  ngOnInit(): void { }

  ngAfterContentInit(): void { }

  loading = false;
 
  fantasyPlayerSettings =  localStorage.getItem(Constants.fantasyLeagueSettings) !== null ? JSON.parse(localStorage.getItem(Constants.fantasyLeagueSettings)) : Constants.fantasyPlayerSettings;
  fantasyGoalieSettings = Constants.fantasyGoalieSettings;
  
  settingsControl: FormControl;

  constructor(private settingsService: SettingsService) {

    this.settingsControl = new FormControl(null, {
      validators: Validators.required,
      updateOn: 'blur'
    });
  }

  submitPlayerSettings($form: NgForm) {

    const settings: {} = $form.value;
    const newSettings = [];
    let currentSettings = Constants.fantasyPlayerSettings;

    for (var key in settings) {
      let setting = currentSettings.filter(x => x.value === key)[0];
      setting.settingValue = settings[key];
      newSettings.push(setting);
    }

    this.settingsService.saveFantasyLeagueSettings(newSettings);
  }

  submitGoalieSettings($form: NgForm){

  }

}


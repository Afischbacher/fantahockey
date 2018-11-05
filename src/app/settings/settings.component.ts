import { Component, OnInit, AfterContentInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';
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

  ngOnInit(): void {
    
   }

  ngAfterContentInit(): void { }

  loading = false;

  fantasyPlayerSettings = localStorage.getItem(Constants.playerFantasyLeagueSettings) !== null
    && localStorage.getItem(Constants.playerFantasyLeagueSettings).length > 10
    ? JSON.parse(localStorage.getItem(Constants.playerFantasyLeagueSettings))
    : Constants.fantasyPlayerSettings;

  fantasyGoalieSettings = localStorage.getItem(Constants.goalieFantasyLeaugeSettings) !== null
    && localStorage.getItem(Constants.goalieFantasyLeaugeSettings).length > 10
    ? JSON.parse(localStorage.getItem(Constants.goalieFantasyLeaugeSettings))
    : Constants.fantasyGoalieSettings;

  playerSettingsControl: FormControl;
  goalieSettingsControl: FormControl;

  constructor(private settingsService: SettingsService, private tourService: TourService) {

    this.playerSettingsControl = new FormControl(null, {
      validators: Validators.required,
      updateOn: 'blur'
    });

    this.goalieSettingsControl = new FormControl(null, {
      validators: Validators.required,
      updateOn: 'blur'
    });

  }

  submitPlayerSettings($form: NgForm) {

    const playerSettings: {} = $form.value;
    const newPlayerSettings = [];
    let currentSettings = this.fantasyPlayerSettings;

    for (var key in playerSettings) {

      const setting = currentSettings.filter((x: any) => x.value === key)[0];
      setting.settingValue = playerSettings[key];
      newPlayerSettings.push(setting);

    }

     this.settingsService.savePlayerFantasyLeagueSettings(newPlayerSettings);
  }

  submitGoalieSettings($form: NgForm) {

    const goalieSettings: {} = $form.value;
    const newGoalieSettings = [];

    let currentSettings = this.fantasyGoalieSettings;

    for (var key in goalieSettings) {

      const setting = currentSettings.filter((x: any) => x.value === key)[0];
      setting.settingValue = goalieSettings[key];
      newGoalieSettings.push(setting);

    }

    this.settingsService.saveGoalieFantasyLeaugeSettings(newGoalieSettings);

  }

}


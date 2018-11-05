import { Injectable } from "@angular/core";
import { Constants } from "@app/core/constants/constants";

@Injectable()
export class SettingsService {

  async savePlayerFantasyLeagueSettings(settings: any): Promise<void> {
    await localStorage.setItem(Constants.playerFantasyLeagueSettings, JSON.stringify(settings));
  }

  async saveGoalieFantasyLeaugeSettings(settings: any): Promise<void>{ 
    await localStorage.setItem(Constants.goalieFantasyLeaugeSettings, JSON.stringify(settings));
  }

  async getPlayerFantasyLeagueSettings(): Promise<{}> {
    return await localStorage.getItem(Constants.playerFantasyLeagueSettings);
  }

  async getGoalieFantasyLeagueSettings(): Promise<{}> {
    return await localStorage.getItem(Constants.goalieFantasyLeaugeSettings);
  }
}
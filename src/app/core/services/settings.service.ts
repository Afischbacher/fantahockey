import { Injectable } from "@angular/core";
import { Constants } from "@app/core/constants/constants";

@Injectable()
export class SettingsService {

  async saveFantasyLeagueSettings(settings: any): Promise<void> {
    await localStorage.setItem(Constants.fantasyLeagueSettings, JSON.stringify(settings));
  }

  async getFantasyLeagueSettings(): Promise<{}> {
    return await localStorage.getItem(Constants.fantasyLeagueSettings);
  }
}
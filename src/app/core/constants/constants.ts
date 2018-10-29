import { environment } from "@env/environment";

export class Constants {
    static readonly initalizedTour: string = `initializedTour-${environment.appName}`;
    static readonly settings: any[] = [
        { value: "timeOnIce", name: "Time on Ice", settingValue: 0 },
        { value: "assists", name: "Assists",  settingValue: 4 },
        { value: "goals", name: "Goals", settingValue: 6 },
        { value: "pim", name: "PIM", settingValue: 0.5  },
        { value: "shots", name: "Shots" , settingValue: 0.25 },
        { value: "games", name: "Games", settingValue: 0 },
        { value: "hits", name: "Hits", settingValue: 0 },
        { value: "powerPlayGoals", name: "PP Goals", settingValue: 0  },
        { value: "powerPlayPoints", name: "PP Points", settingValue: 0  },
        { value: "powerPlayTimeOnIce", name: "PP Time on Ice", settingValue: 0  },
        { value: "evenTimeOnIce", name: "Event Time on Ice", settingValue: 0  },
        { value: "penaltyMinutes", name: "Penalty Minutes", settingValue: 0  },
        { value: "faceOffPct", name: "Face-off Percentage", settingValue: 0  },
        { value: "shotPct", name: "Shot Percentage", settingValue: 0  },
        { value: "gameWinningGoals", name: "Game Winning Goals", settingValue: 0  },
        { value: "overTimeGoals", name: "OT Goals", settingValue: 0 },
        { value: "shortHandedGoals", name: "Short Handed Goals", settingValue: 0  },
        { value: "shortHandedPoints", name: "Short Handed Points", settingValue: 0  },
        { value: "shortHandedTimeOnIce", name: "Short Handed Time on Ice", settingValue: 0 },
        { value: "blocked", name: "Shots Blocked", settingValue: 0.25 },
        { value: "plusMinus", name: "Plus Minus", settingValue: 0.5  },
        { value: "points", name: "Points", settingValue: 1  },
        { value: "shifts", name: "Shifts", settingValue: 0  },
        { value: "timeOnIcePerGame", name: "Time on Ice Per Game", settingValue: 0  },
        { value: "evenTimeOnIcePerGame", name: "Even Time On Ice Per Game", settingValue: 0  },
        { value: "shortHandedTimeOnIcePerGame", name: "Short Handed Time on Ice Per Game" , settingValue: 0 },
        { value: "powerPlayTimeOnIcePerGame", name: "Powerplay Time on Ice Per Game", settingValue: 0 },
    ];
}
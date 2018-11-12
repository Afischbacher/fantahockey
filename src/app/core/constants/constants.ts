import { environment } from "@env/environment";

export class Constants {
    static readonly initalizedTour: string = `initializedTour-${environment.appName}`;
    static readonly fantasyPlayerSettings: any[] = [
        { value: "timeOnIce", name: "Time on Ice", settingValue: 0 },
        { value: "assists", name: "Assists", settingValue: 4 },
        { value: "goals", name: "Goals", settingValue: 6 },
        { value: "pim", name: "PIM", settingValue: 0.5 },
        { value: "shots", name: "Shots", settingValue: 0.25 },
        { value: "games", name: "Games", settingValue: 0 },
        { value: "hits", name: "Hits", settingValue: 0 },
        { value: "powerPlayGoals", name: "PP Goals", settingValue: 0 },
        { value: "powerPlayPoints", name: "PP Points", settingValue: 0 },
        { value: "powerPlayTimeOnIce", name: "PP Time on Ice", settingValue: 0 },
        { value: "evenTimeOnIce", name: "Event Time on Ice", settingValue: 0 },
        { value: "penaltyMinutes", name: "Penalty Minutes", settingValue: 0 },
        { value: "faceOffPct", name: "Face-off Percentage", settingValue: 0 },
        { value: "shotPct", name: "Shot Percentage", settingValue: 0 },
        { value: "gameWinningGoals", name: "Game Winning Goals", settingValue: 0 },
        { value: "overTimeGoals", name: "OT Goals", settingValue: 0 },
        { value: "shortHandedGoals", name: "Short Handed Goals", settingValue: 0 },
        { value: "shortHandedPoints", name: "Short Handed Points", settingValue: 0 },
        { value: "shortHandedTimeOnIce", name: "Short Handed Time on Ice", settingValue: 0 },
        { value: "blocked", name: "Shots Blocked", settingValue: 0.25 },
        { value: "plusMinus", name: "Plus Minus", settingValue: 0.5 },
        { value: "points", name: "Points", settingValue: 1 },
        { value: "shifts", name: "Shifts", settingValue: 0 },
        { value: "timeOnIcePerGame", name: "Time on Ice Per Game", settingValue: 0 },
        { value: "evenTimeOnIcePerGame", name: "Even Time On Ice Per Game", settingValue: 0 },
        { value: "shortHandedTimeOnIcePerGame", name: "Short Handed Time on Ice Per Game", settingValue: 0 },
        { value: "powerPlayTimeOnIcePerGame", name: "Powerplay Time on Ice Per Game", settingValue: 0 },
    ];

    static readonly fantasyGoalieSettings: any[] = [
        { value: "timeOnIce", name: "Time on Ice", settingValue: 0 },
        { value: "ot", name: "Over Time", settingValue: 0 },
        { value: "shutouts", name: "Shutouts", settingValue: 5 },
        { value: "ties", name: "Ties", settingValue: 0 },
        { value: "wins", name: "Wins", settingValue: 5 },
        { value: "losses", name: "Losses", settingValue: 0 },
        { value: "saves", name: "Saves", settingValue: 0.6 },
        { value: "powerPlaySaves", name: "Power Play Saves", settingValue: 0 },
        { value: "shortHandedSaves", name: "Short Handed Saves", settingValue: 0 },
        { value: "evenSaves", name: "Even Saves", settingValue: 0 },
        { value: "shortHandedShots", name: "Short Handed Shots", settingValue: 0 },
        { value: "evenShots", name: "Even Shots", settingValue: 0 },
        { value: "powerPlayShots", name: "Power Play Shots", settingValue: 0 },
        { value: "savePercentage", name: "Save Percentage", settingValue: 0 },
        { value: "goalAgainstAverage", name: "Goals Against Average", settingValue: 0 },
        { value: "games", name: "Games", settingValue: 0 },
        { value: "gamesStarted", name: "Games Started", settingValue: 0 },
        { value: "shotsAgainst", name: "Shots Against", settingValue: 0 },
        { value: "goalsAgainst", name: "Goals Against", settingValue: -3 },
        { value: "timeOnIcePerGame", name: "Time on Ice Per Game", settingValue: 0 },
        { value: "powerPlaySavePercentage", name: "Power Play Save Percentage", settingValue: 0 },
        { value: "shortHandedSavePercentage", name: "Short Handed Save Percentage", settingValue: 0 },
        { value: "evenStrengthSavePercentage", name: "Even Strength Save Percentage", settingValue: 0 },
    ];

    static readonly playerFantasyLeagueSettings: string = "playerFantasyLeagueSettings";
    static readonly goalieFantasyLeaugeSettings: string = "goalieFantasyLeagueSettings";

    static readonly goaliePosition = "G";

    static readonly version = "version";

    static readonly appTour = [{
        anchorId: 'tour1',
        content: 'Welcome to the NHL fantasy trade tool!',
        title: 'Welcome!',
        route: '/dashboard',
        enableBackdrop: true
    }, {
        anchorId: 'tour2',
        content: "Use the menu to check out more features of the tool (it's a work in progress..)",
        title: 'The Menu',
        route: '/dashboard',
        enableBackdrop: true
    }, {
        anchorId: 'tour3',
        content: 'Search for any active NHL player to see the latest stats for the current season',
        title: 'Search Players',
        route: '/dashboard',
        enableBackdrop: true
    },
    {
        anchorId: 'tour4',
        content: "Craft trades and watch the fantasy score points to help you make the best trade possible",
        title: 'Fantasy Scores',
        route: '/dashboard',
        enableBackdrop: true
    },
    {
        anchorId: 'tour7',
        content: "Configure your fantasy leauge settings here for both players and goalies based on your fantasy leauge",
        title: 'Fantasy Configuration',
        route: '/settings',
        enableBackdrop: true

    },
    {
        anchorId: 'tour8',
        content: "Start configuring and crafting the trades you want, any way you like",
        title: 'Start Trading!',
        route: '/dashboard',
        enableBackdrop: true

    }];
    
}
export interface MetaData {
    wait: number;
    timeStamp: string;
}

export interface Game {
    pk: number;
    season: string;
    type: string;
}

export interface Datetime {
    dateTime: Date;
}

export interface Status {
    abstractGameState: string;
    codedGameState: string;
    detailedState: string;
    statusCode: string;
    startTimeTBD: boolean;
}

export interface TimeZone {
    id: string;
    offset: number;
    tz: string;
}

export interface Venue {
    id: number;
    name: string;
    link: string;
    city: string;
    timeZone: TimeZone;
}

export interface Division {
    id: number;
    name: string;
    nameShort: string;
    link: string;
    abbreviation: string;
}

export interface Conference {
    id: number;
    name: string;
    link: string;
}

export interface Franchise {
    franchiseId: number;
    teamName: string;
    link: string;
}

export interface Away {
    id: number;
    name: string;
    link: string;
    venue: Venue;
    abbreviation: string;
    triCode: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    division: Division;
    conference: Conference;
    franchise: Franchise;
    shortName: string;
    officialSiteUrl: string;
    franchiseId: number;
    active: boolean;
}

export interface TimeZone2 {
    id: string;
    offset: number;
    tz: string;
}

export interface Venue2 {
    id: number;
    name: string;
    link: string;
    city: string;
    timeZone: TimeZone2;
}

export interface Division2 {
    id: number;
    name: string;
    nameShort: string;
    link: string;
    abbreviation: string;
}

export interface Conference2 {
    id: number;
    name: string;
    link: string;
}

export interface Franchise2 {
    franchiseId: number;
    teamName: string;
    link: string;
}

export interface Home {
    id: number;
    name: string;
    link: string;
    venue: Venue2;
    abbreviation: string;
    triCode: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    division: Division2;
    conference: Conference2;
    franchise: Franchise2;
    shortName: string;
    officialSiteUrl: string;
    franchiseId: number;
    active: boolean;
}

export interface Teams {
    away: Away;
    home: Home;
}

export interface Players {
}

export interface Venue3 {
    id: number;
    name: string;
    link: string;
}

export interface GameData {
    game: Game;
    datetime: Datetime;
    status: Status;
    teams: Teams;
    players: Players;
    venue: Venue3;
}

export interface Plays {
    allPlays: any[];
    scoringPlays: any[];
    penaltyPlays: any[];
    playsByPeriod: any[];
}

export interface Away2 {
    scores: number;
    attempts: number;
}

export interface Home2 {
    scores: number;
    attempts: number;
}

export interface ShootoutInfo {
    away: Away2;
    home: Home2;
}

export interface Team {
    id: number;
    name: string;
    link: string;
    abbreviation: string;
    triCode: string;
}

export interface Home3 {
    team: Team;
    goals: number;
    shotsOnGoal: number;
    goaliePulled: boolean;
    numSkaters: number;
    powerPlay: boolean;
}

export interface Team2 {
    id: number;
    name: string;
    link: string;
    abbreviation: string;
    triCode: string;
}

export interface Away3 {
    team: Team2;
    goals: number;
    shotsOnGoal: number;
    goaliePulled: boolean;
    numSkaters: number;
    powerPlay: boolean;
}

export interface Teams2 {
    home: Home3;
    away: Away3;
}

export interface IntermissionInfo {
    intermissionTimeRemaining: number;
    intermissionTimeElapsed: number;
    inIntermission: boolean;
}

export interface Linescore {
    currentPeriod: number;
    periods: any[];
    shootoutInfo: ShootoutInfo;
    teams: Teams2;
    powerPlayStrength: string;
    hasShootout: boolean;
    intermissionInfo: IntermissionInfo;
}

export interface Team3 {
    id: number;
    name: string;
    link: string;
    abbreviation: string;
    triCode: string;
}

export interface TeamSkaterStats {
    goals: number;
    pim: number;
    shots: number;
    powerPlayPercentage: string;
    powerPlayGoals: number;
    powerPlayOpportunities: number;
    faceOffWinPercentage: string;
    blocked: number;
    takeaways: number;
    giveaways: number;
    hits: number;
}

export interface TeamStats {
    teamSkaterStats: TeamSkaterStats;
}

export interface Players2 {
}

export interface Person {
    fullName: string;
    link: string;
}

export interface Position {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
}

export interface Coach {
    person: Person;
    position: Position;
}

export interface Away4 {
    team: Team3;
    teamStats: TeamStats;
    players: Players2;
    goalies: any[];
    skaters: any[];
    onIce: any[];
    onIcePlus: any[];
    scratches: any[];
    penaltyBox: any[];
    coaches: Coach[];
}

export interface Team4 {
    id: number;
    name: string;
    link: string;
    abbreviation: string;
    triCode: string;
}

export interface TeamSkaterStats2 {
    goals: number;
    pim: number;
    shots: number;
    powerPlayPercentage: string;
    powerPlayGoals: number;
    powerPlayOpportunities: number;
    faceOffWinPercentage: string;
    blocked: number;
    takeaways: number;
    giveaways: number;
    hits: number;
}

export interface TeamStats2 {
    teamSkaterStats: TeamSkaterStats2;
}

export interface Players3 {
}

export interface Person2 {
    fullName: string;
    link: string;
}

export interface Position2 {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
}

export interface Coach2 {
    person: Person2;
    position: Position2;
}

export interface Home4 {
    team: Team4;
    teamStats: TeamStats2;
    players: Players3;
    goalies: any[];
    skaters: any[];
    onIce: any[];
    onIcePlus: any[];
    scratches: any[];
    penaltyBox: any[];
    coaches: Coach2[];
}

export interface Teams3 {
    away: Away4;
    home: Home4;
}

export interface Boxscore {
    teams: Teams3;
    officials: any[];
}

export interface Decisions {
}

export interface LiveData {
    plays: Plays;
    linescore: Linescore;
    boxscore: Boxscore;
    decisions: Decisions;
}

export interface LiveFeed {
    copyright: string;
    gamePk: number;
    link: string;
    metaData: MetaData;
    gameData: GameData;
    liveData: LiveData;
}

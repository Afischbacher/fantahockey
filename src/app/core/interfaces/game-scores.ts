
    export interface Status {
        abstractGameState: string;
        codedGameState: string;
        detailedState: string;
        statusCode: string;
        startTimeTBD: boolean;
    }

    export interface LeagueRecord {
        wins: number;
        losses: number;
        ot: number;
        type: string;
    }

    export interface Team {
        id: number;
        name: string;
        link: string;
        logo: string;
    }

    export interface Away {
        leagueRecord: LeagueRecord;
        score: number;
        team: Team;
    }

    export interface LeagueRecord2 {
        wins: number;
        losses: number;
        ot: number;
        type: string;
    }

    export interface Team2 {
        id: number;
        name: string;
        link: string;
        logo: string;
    }

    export interface Home {
        leagueRecord: LeagueRecord2;
        score: number;
        team: Team2;
    }

    export interface Teams {
        away: Away;
        home: Home;
    }

    export interface Venue {
        id: number;
        name: string;
        link: string;
    }

    export interface Content {
        link: string;
    }

    export interface Game {
        gamePk: number;
        link: string;
        gameType: string;
        season: string;
        gameDate: Date;
        status: Status;
        teams: Teams;
        venue: Venue;
        content: Content;
        startTime: string;
    }

    export interface Date {
        date: string;
        totalItems: number;
        totalEvents: number;
        totalGames: number;
        totalMatches: number;
        games: Game[];
        events: any[];
        matches: any[];
    }

    export interface GameScores {
        copyright: string;
        totalItems: number;
        totalEvents: number;
        totalGames: number;
        totalMatches: number;
        wait: number;
        dates: Date[];
    }

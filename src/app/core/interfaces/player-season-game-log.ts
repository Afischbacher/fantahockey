
    export interface Type {
        displayName: string;
    }

    export interface GameStats {
        timeOnIce: string;
        assists: number;
        goals: number;
        pim: number;
        shots: number;
        games: number;
        hits: number;
        powerPlayGoals: number;
        powerPlayPoints: number;
        powerPlayTimeOnIce: string;
        evenTimeOnIce: string;
        penaltyMinutes: string;
        shotPct: number;
        gameWinningGoals: number;
        overTimeGoals: number;
        shortHandedGoals: number;
        shortHandedPoints: number;
        shortHandedTimeOnIce: string;
        blocked: number;
        plusMinus: number;
        points: number;
        shifts: number;
        faceOffPct?: number;
    }

    export interface Team {
        id: number;
        name: string;
        link: string;
    }

    export interface Opponent {
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
        content: Content;
    }

    export interface Split {
        season: string;
        stat: Stat;
        team: Team;
        opponent: Opponent;
        date: string;
        isHome: boolean;
        isWin: boolean;
        isOT: boolean;
        game: Game;
    }

    export interface Stat {
        type: Type;
        splits: Split[];
    }

    export interface GameLogStats {
        copyright: string;
        stats: Stat[];
    }

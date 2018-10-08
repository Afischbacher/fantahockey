import { Person } from "@app/core/interfaces/person";

    export interface TeamRoster {
        copyright: string;
        roster: TeamPlayer[];
        link: string;
    }

    export interface TeamPlayer {
        person: Person;
        overallStats: OverallStats;
        jerseyNumber: string;
        position: Position;
    }

        export interface Type {
            displayName: string;
        }
    
        export interface CurrentSeasonStats {
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
            faceOffPct: number;
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
            timeOnIcePerGame: string;
            evenTimeOnIcePerGame: string;
            shortHandedTimeOnIcePerGame: string;
            powerPlayTimeOnIcePerGame: string;
        }
    
        export interface Split {
            season: string;
            stat: CurrentSeasonStats;
        }
    
        export interface Stats {
            type: Type;
            splits: Split[];
        }
    
        export interface OverallStats {
            copyright: string;
            stats: Stats[];
        }

    



import { Person } from "@app/core/interfaces/person";
import { Position } from "@app/core/interfaces/position";
    export interface TeamRoster {
        copyright: string;
        roster: TeamPlayer[];
        link: string;
    }

    export interface TeamPlayer {
        person: Person;
        image: string;
        overallStats: OverallStats;
        jerseyNumber: string;
        position: Position;
        fantasyScore: number;
        lastYearFantasyScore:number;
        playerInfo: PlayerInfo;
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
            evenTimeOnIcePerGame: string;
            shortHandedTimeOnIcePerGame: string;
            powerPlayTimeOnIcePerGame: string;
            ot: number;
            shutouts: number;
            ties: number;
            wins: number;
            losses: number;
            saves: number;
            powerPlaySaves: number;
            shortHandedSaves: number;
            evenSaves: number;
            shortHandedShots: number;
            evenShots: number;
            powerPlayShots: number;
            savePercentage: number;
            goalAgainstAverage: number;
            gamesStarted: number;
            shotsAgainst: number;
            goalsAgainst: number;
            timeOnIcePerGame: string;
            powerPlaySavePercentage: number;
            shortHandedSavePercentage: number;
            evenStrengthSavePercentage: number;
        }
    
        export interface PlayerInfo {
            id: number;
            fullName: string;
            link: string;
            firstName: string;
            lastName: string;
            primaryNumber: string;
            birthDate: string;
            currentAge: number;
            birthCity: string;
            birthStateProvince: string;
            birthCountry: string;
            nationality: string;
            height: string;
            weight: number;
            active: boolean;
            alternateCaptain: boolean;
            captain: boolean;
            rookie: boolean;
            shootsCatches: string;
            rosterStatus: string;
            currentTeam: CurrentTeam;
            primaryPosition: PrimaryPosition;
        }

        export interface PrimaryPosition {
            code: string;
            name: string;
            type: string;
            abbreviation: string;
        }
        export interface Split {
            season: string;
            stat: CurrentSeasonStats;
        }
    
        export interface Stats {
            type: Type;
            splits: Split[];
        }

        export interface CurrentTeam {
            id: number;
            name: string;
            link: string;
        }
    
        export interface OverallStats {
            copyright: string;
            stats: Stats[];
        }

    



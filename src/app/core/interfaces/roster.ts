
    export interface Roster {
        copyright: string;
        roster: Roster[];
        link: string;
    }
    
    export interface Person {
        id: number;
        fullName: string;
        link: string;
    }

    export interface Position {
        code: string;
        name: string;
        type: string;
        abbreviation: string;
    }

    export interface Roster {
        person: Person;
        jerseyNumber: string;
        position: Position;
    }






import { TimeZone } from "@app/core/interfaces/time-zone";

export interface Venue {
        name: string;
        link: string;
        city: string;
        timeZone: TimeZone;
        id?: number;
    }

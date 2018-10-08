import { Franchise } from "@app/core/interfaces/franchise";
import { Division } from "@app/core/interfaces/division";
import { Conference } from "@app/core/interfaces/conference";
import { Venue } from "@app/core/interfaces/venue";

export interface Team {
    id: number;
    name: string;
    link: string;
    venue: Venue;
    abbreviation: string;
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

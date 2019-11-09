
export interface News {
    value: string;
    format: string;
    processed: string;
}

export interface Analysis {
    value: string;
    format: string;
    processed: string;
}

export interface Attributes {
    id: number;
    uuid: string;
    created: number;
    changed: number;
    headline: string;
    news: News;
    analysis: Analysis;
    source: string;
    source_url: string;
    recap?: any;
    injury: boolean;
    transaction: boolean;
    rumor?: any;
    developmental: boolean;
    sport_headline: boolean;
    overall_headline: boolean;
    metatag?: any;
}

export interface Data {
    type: string;
    id: string;
}

export interface Links {
    self: string;
    related: string;
}

export interface Player {
    data: Data;
    links: Links;
}

export interface Data2 {
    type: string;
    id: string;
}

export interface Links2 {
    self: string;
    related: string;
}

export interface League {
    data: Data2;
    links: Links2;
}

export interface Data3 {
    type: string;
    id: string;
}

export interface Links3 {
    self: string;
    related: string;
}

export interface Position {
    data: Data3;
    links: Links3;
}

export interface Data4 {
    type: string;
    id: string;
}

export interface Links4 {
    self: string;
    related: string;
}

export interface Team {
    data: Data4;
    links: Links4;
}

export interface Links5 {
    self: string;
    related: string;
}

export interface RelatedPlayers {
    data: any[];
    links: Links5;
}

export interface Links6 {
    self: string;
    related: string;
}

export interface RelatedTeams {
    data: any[];
    links: Links6;
}

export interface Relationships {
    player: Player;
    league: League;
    position: Position;
    team: Team;
    related_players: RelatedPlayers;
    related_teams: RelatedTeams;
}

export interface Links7 {
    self: string;
}

export interface Datum {
    type: string;
    id: string;
    attributes: Attributes;
    relationships: Relationships;
    links: Links7;
}

export interface Links8 {
    self: string;
}

export interface Meta {
    links: Links8;
}

export interface Jsonapi {
    version: string;
    meta: Meta;
}

export interface Links9 {
    self: string;
    next: string;
}

export interface Path {
    alias: string;
    pid: number;
    langcode: string;
}

export interface Tickets {
    uri: string;
    title: string;
    options: any[];
}

export interface Shop {
    uri: string;
    title: string;
    options: any[];
}

export interface Uri {
    value: string;
    url: string;
}

export interface Attributes2 {
    id: number;
    uuid: string;
    name: string;
    created: number;
    changed: number;
    player_id: number;
    legacy_id: number;
    first_name: string;
    last_name: string;
    birth_date: string;
    path: Path;
    latest_player_news_uuid: string;
    latest_player_news_timestamp: number;
    metatag?: any;
    birth_city: string;
    birth_country: string;
    birth_state: string;
    college: string;
    contract: string;
    debut_year: number;
    draft_pick_overall: number;
    draft_pick_supp: boolean;
    draft_round: number;
    draft_year: number;
    handedness: string;
    height: number;
    jersey: string;
    profile?: any;
    stats_global_id: number;
    stats_id?: any;
    field_player_type_metatags?: any;
    weight: number;
    abbreviation: string;
    locale: string;
    short: string;
    team_id?: number;
    color: string;
    active?: boolean;
    tickets: Tickets;
    shop: Shop;
    last_season?: number;
    field_team_type_metatags?: any;
    venue_id?: number;
    fid?: number;
    langcode: string;
    filename: string;
    uri: Uri;
    filemime: string;
    filesize?: number;
    status?: boolean;
    url: string;
}

export interface Data5 {
    type: string;
    id: string;
}

export interface Links10 {
    self: string;
    related: string;
}

export interface Type {
    data: Data5;
    links: Links10;
}

export interface Data6 {
    type: string;
    id: string;
}

export interface Links11 {
    self: string;
    related: string;
}

export interface Team2 {
    data: Data6;
    links: Links11;
}

export interface Data7 {
    type: string;
    id: string;
}

export interface Links12 {
    self: string;
    related: string;
}

export interface Position2 {
    data: Data7;
    links: Links12;
}

export interface Meta2 {
    alt: string;
    title: string;
    width: number;
    height: number;
}

export interface Data8 {
    type: string;
    id: string;
    meta: Meta2;
}

export interface Links13 {
    self: string;
    related: string;
}

export interface Image {
    data: Data8;
    links: Links13;
}

export interface Data9 {
    type: string;
    id: string;
}

export interface Links14 {
    self: string;
    related: string;
}

export interface Status {
    data: Data9;
    links: Links14;
}

export interface Data10 {
    type: string;
    id: string;
}

export interface Links15 {
    self: string;
    related: string;
}

export interface DraftTeam {
    data: Data10;
    links: Links15;
}

export interface Data11 {
    type: string;
    id: string;
}

export interface Links16 {
    self: string;
    related: string;
}

export interface Sport {
    data: Data11;
    links: Links16;
}

export interface Data12 {
    type: string;
    id: string;
}

export interface Links17 {
    self: string;
    related: string;
}

export interface League2 {
    data: Data12;
    links: Links17;
}

export interface Meta3 {
    alt: string;
    title: string;
    width: number;
    height: number;
}

export interface Data13 {
    type: string;
    id: string;
    meta: Meta3;
}

export interface Links18 {
    self: string;
    related: string;
}

export interface PrimaryLogo {
    data: Data13;
    links: Links18;
}

export interface Meta4 {
    alt: string;
    title: string;
    width: number;
    height: number;
}

export interface Data14 {
    type: string;
    id: string;
    meta: Meta4;
}

export interface Links19 {
    self: string;
    related: string;
}

export interface SecondaryLogo {
    data: Data14;
    links: Links19;
}

export interface Meta5 {
    alt: string;
    title: string;
    width: number;
    height: number;
}

export interface Data15 {
    type: string;
    id: string;
    meta: Meta5;
}

export interface Links20 {
    self: string;
    related: string;
}

export interface TransparentLogo {
    data: Data15;
    links: Links20;
}

export interface Data16 {
    type: string;
    id: string;
}

export interface Links21 {
    self: string;
    related: string;
}

export interface Conference {
    data: Data16;
    links: Links21;
}

export interface Data17 {
    type: string;
    id: string;
}

export interface Links22 {
    self: string;
    related: string;
}

export interface Division {
    data: Data17;
    links: Links22;
}

export interface Data18 {
    type: string;
    id: string;
}

export interface Links23 {
    self: string;
    related: string;
}

export interface Uid {
    data: Data18;
    links: Links23;
}

export interface Relationships2 {
    type: Type;
    team: Team2;
    position: Position2;
    image: Image;
    status: Status;
    draft_team: DraftTeam;
    sport: Sport;
    league: League2;
    primary_logo: PrimaryLogo;
    secondary_logo: SecondaryLogo;
    transparent_logo: TransparentLogo;
    conference: Conference;
    division: Division;
    uid: Uid;
}

export interface Links24 {
    self: string;
}

export interface Included {
    type: string;
    id: string;
    attributes: Attributes2;
    relationships: Relationships2;
    links: Links24;
}

export interface NhlNews {
    data: Datum[];
    jsonapi: Jsonapi;
    links: Links9;
    included: Included[];
}


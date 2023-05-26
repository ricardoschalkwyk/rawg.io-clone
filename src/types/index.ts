export interface GetResult {
  count: number;
  next: string;
  previous?: string;
  results: Game[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: Filters;
  nofollow_collections: string[];
}

export interface Filters {
  years: FiltersYear[];
}

export interface FiltersYear {
  from: number;
  to: number;
  filter: string;
  decade: number;
  years: YearYear[];
  nofollow: boolean;
  count: number;
}

export interface YearYear {
  year: number;
  count: number;
  nofollow: boolean;
}

export interface OrderByFilter {
  id: number;
  OrderName: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status?: AddedByStatus;
  metacritic?: number | null;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  user_game?: null;
  reviews_count: number;
  saturated_color: Color;
  dominant_color: Color;
  platforms: PlatformElement[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip?: null;
  tags: Genre[];
  esrb_rating?: EsrbRating | null;
  short_screenshots: ShortScreenshot[];
}

export interface GameDetail {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: any[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  reactions: Reactions;
  added: number;
  added_by_status: AddedByStatus;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: ParentPlatform[];
  platforms: Platform2[];
  stores: Store[];
  developers: Developer[];
  genres: Genre[];
  tags: Tag[];
  publishers: Publisher[];
  esrb_rating: EsrbRating;
  clip: any;
  description_raw: string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Reactions {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "7": number;
  "9": number;
  "10": number;
  "11": number;
  "12": number;
  "14": number;
  "15": number;
  "16": number;
  "21": number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
  id: number;
  name: Name;
  slug: Slug;
}

export enum Name {
  AdultsOnly = "Adults Only",
  Android = "Android",
  AppleMacintosh = "Apple Macintosh",
  Everyone10 = "Everyone 10+",
  IOS = "iOS",
  Linux = "Linux",
  Mature = "Mature",
  Nintendo = "Nintendo",
  PC = "PC",
  PlayStation = "PlayStation",
  Teen = "Teen",
  Xbox = "Xbox",
}

export enum Slug {
  AdultsOnly = "adults-only",
  Android = "android",
  Everyone10Plus = "everyone-10-plus",
  Ios = "ios",
  Linux = "linux",
  MAC = "mac",
  Mature = "mature",
  Nintendo = "nintendo",
  PC = "pc",
  Playstation = "playstation",
  Teen = "teen",
  Xbox = "xbox",
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  domain?: Domain;
  language?: Language;
}

export enum Domain {
  AppsAppleCOM = "apps.apple.com",
  EpicgamesCOM = "epicgames.com",
  GogCOM = "gog.com",
  MarketplaceXboxCOM = "marketplace.xbox.com",
  MicrosoftCOM = "microsoft.com",
  NintendoCOM = "nintendo.com",
  PlayGoogleCOM = "play.google.com",
  StorePlaystationCOM = "store.playstation.com",
  StoreSteampoweredCOM = "store.steampowered.com",
}

export enum Language {
  Eng = "eng",
}

export interface ParentPlatform {
  platform: EsrbRating;
}

export interface PlatformElement {
  platform: PlatformPlatform;
  released_at: Date;
  requirements_en?: Requirements | null;
  requirements_ru?: Requirements | null;
}

export interface PlatformPlatform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}
export interface Platform2 {
  platform: PlatformPlatform;
  released_at: string;
  requirements: Requirements;
}

export interface Requirements {
  minimum: string;
  recommended?: string;
}

export interface Rating {
  id: number;
  title: Title;
  count: number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Store {
  id: number;
  store: Genre;
}

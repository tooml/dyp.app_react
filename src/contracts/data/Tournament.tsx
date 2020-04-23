import Options from "./Options";

export interface Player {
  id: string,
  firstName: string,
  lastName: string,
  fullName: string,
  fullNameShort: string,
  image: string
}

export interface Team {
  playerOne: Player,
  playerTwo: Player
}

export enum SetResult {
  Home = 0,
  Away = 1,
  Drawn = 2,
  None = 3,
}

export interface Match {
  id: string,
  home: Team,
  away: Team,
  table: number,
  sets: number,
  drawn: boolean,
  setResults: SetResult[]
}

export interface Round {
  id: string,
  name: string,
  matches: Match[]
}

export interface Tournament {
  id: string,
  name: string,
  created: string,
  options: Options,
  rounds: Round[]
}

export interface RankingRow {
  rank: number,
  playerName: string,
  matches: number,
  w: number,
  d: number,
  l: number,
  points: number,
  q1: number,
  q2: number
}

export interface Player {
  id: string,
  firstName: string,
  lastName: string,
  fullName: string,
  fullNameShort: string

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

  rounds: Round[]
}
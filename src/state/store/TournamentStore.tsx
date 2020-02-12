import Tournament from '../../contracts/data/Tournament';

export interface TournamentState {
  tournaments: Tournament[]
}

export const initialState: TournamentState = {
    tournaments: [],
}

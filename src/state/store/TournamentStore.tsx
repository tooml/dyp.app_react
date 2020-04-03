import { Tournament, Match } from '../../contracts/data/Tournament';
import TournamentInfo from '../../contracts/data/TournamentInfo';

export interface TournamentState {
  tournamentsInfo: TournamentInfo[],
  tournament: Tournament,
  match: Match
}

export const initialState: TournamentState = {
  tournamentsInfo: [],
  tournament: { id: '', name: '', created: '', rounds: [] },
  match: {
    id: '', sets: 0, drawn: false,
    home: {
      playerOne: { id: '', firstName: '', lastName: '', fullName: '', fullNameShort:'' },
      playerTwo: { id: '', firstName: '', lastName: '', fullName: '', fullNameShort:'' }
    },
    away: {
      playerOne: { id: '', firstName: '', lastName: '', fullName: '', fullNameShort:'' },
      playerTwo: { id: '', firstName: '', lastName: '', fullName: '', fullNameShort:'' }
    },
    setResults: [],
  }
}

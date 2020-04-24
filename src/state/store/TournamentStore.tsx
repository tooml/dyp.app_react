import { Tournament, Match, RankingRow } from '../../contracts/data/Tournament';
import TournamentInfo from '../../contracts/data/TournamentInfo';
import { initialOptions } from './OptionsStore';

export interface TournamentState {
  tournamentsInfo: TournamentInfo[],
  tournament: Tournament,
  ranking: RankingRow[],
  match: Match
}

export const initialState: TournamentState = {
  tournamentsInfo: [],
  tournament: { id: '', name: '', created: '', options: initialOptions, rounds: [] },
  ranking: [],
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
    table: 0,
    setResults: [],
  }
}

import {
  TournamentsActionTypes, FETCH_TOURNAMENTS, LOAD_TOURNAMENT, SELECT_MATCH,
  SAVE_MATCH_RESULT, NEW_ROUND, RESET_MATCH_RESULT,
  SaveMatchResultAction, ResetMatchResultAction, FETCH_TOURNAMENT_RANKING
} from '../actions/TournamentAction';

import { initialState, TournamentState } from './../store/TournamentStore';

import produce from 'immer';

export function tournamentReducer(tournamentsState: TournamentState = initialState, action: TournamentsActionTypes): TournamentState {
  switch (action.type) {
    case FETCH_TOURNAMENTS:
      return { ...tournamentsState, tournamentsInfo: action.payload }

    case LOAD_TOURNAMENT:
      return { ...tournamentsState, tournament: action.payload }

    case SELECT_MATCH:
      return { ...tournamentsState, match: action.payload }

    case NEW_ROUND:
      return produce(tournamentsState, draft => {
        draft.tournament.rounds.push(action.payload);
      });

    case SAVE_MATCH_RESULT:
      return newState(tournamentsState, action);

    case RESET_MATCH_RESULT:
      return newState(tournamentsState, action);

    case FETCH_TOURNAMENT_RANKING:
      return { ...tournamentsState, ranking: action.payload }

    default:
      return tournamentsState;
  }
};

const newState = (tournamentsState: TournamentState, action: SaveMatchResultAction | ResetMatchResultAction) => {
  return produce(tournamentsState, draft => {
    const round_index = draft.tournament.rounds.findIndex(round => round.matches.find(match => match.id === action.payload.id));
    const match_index = draft.tournament.rounds[round_index].matches.findIndex(match => match.id === action.payload.id);

    draft.tournament.rounds[round_index].matches[match_index] = action.payload;
  });
}

import {
  TournamentsActionTypes, FETCH_TOURNAMENTS, LOAD_TOURNAMENT, SELECT_MATCH,
  SAVE_MATCH_RESULT, NEW_ROUND, RESET_MATCH_RESULT,
  SaveMatchResultAction, ResetMatchResultAction, FETCH_TOURNAMENT_RANKING,
  SET_TOURNAMENT_TABLES_OPTION, SET_TOURNAMENT_POINTS_OPTION, SET_TOURNAMENT_POINTS_DRAWN_OPTION,
  SET_TOURNAMENT_DRAWN_OPTION, SET_TOURNAMENT_SETS_OPTION, SET_TOURNAMENT_WALKOVER_OPTION, DELETE_TOURNAMENT
} from '../actions/TournamentAction';

import { initialState, TournamentState } from './../store/TournamentStore';

import produce from 'immer';

export function tournamentReducer(tournamentsState: TournamentState = initialState, action: TournamentsActionTypes): TournamentState {
  switch (action.type) {
    case FETCH_TOURNAMENTS:
      return { ...tournamentsState, tournamentsInfo: action.payload }

    case DELETE_TOURNAMENT:
      const delete_index = tournamentsState.tournamentsInfo.findIndex(t => t.id === action.payload.id);
      return produce(tournamentsState, draft => {
        draft.tournamentsInfo.splice(delete_index, 1);
      });

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

    case SET_TOURNAMENT_TABLES_OPTION:
      return produce(tournamentsState, draft => {
        draft.tournament.options.tables = action.payload;
      });

    case SET_TOURNAMENT_POINTS_OPTION:
      return produce(tournamentsState, draft => {
        draft.tournament.options.points = action.payload;
      });

    case SET_TOURNAMENT_POINTS_DRAWN_OPTION:
      return produce(tournamentsState, draft => {
        draft.tournament.options.pointsDrawn = action.payload;
      });

    case SET_TOURNAMENT_DRAWN_OPTION:
      return produce(tournamentsState, draft => {
        draft.tournament.options.drawn = action.payload;
      });

    case SET_TOURNAMENT_SETS_OPTION:
      return produce(tournamentsState, draft => {
        draft.tournament.options.sets = action.payload;
      });

    case SET_TOURNAMENT_WALKOVER_OPTION:
      return produce(tournamentsState, draft => {
        draft.tournament.options.walkover = action.payload;
      });

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

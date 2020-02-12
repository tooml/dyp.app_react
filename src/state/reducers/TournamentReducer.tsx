import { TournamentsActionTypes, FETCH_TOURNAMENTS } from '../actions/TournamentAction';
import { initialState, TournamentState } from './../store/TournamentStore';

export function tournamentReducer(tournamentsState: TournamentState = initialState, action: TournamentsActionTypes): TournamentState {
  switch (action.type) {
    case FETCH_TOURNAMENTS:
      return { ...tournamentsState, tournaments: action.payload }

    default:
      return tournamentsState;
  }
};

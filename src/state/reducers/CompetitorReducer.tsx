import { CompetitorsActionTypes, FETCH_INITIAL_COMPETITORS, TOGGLE_COMPETITOR, FETCH_TOURNAMENT_COMPETITORS  } from '../actions/CompetitorActions';
import { initialState, CompetitorsState } from './../store/CompetitorStore';
import produce from 'immer';

export function competitorsReducer(competitorsState: CompetitorsState = initialState, action: CompetitorsActionTypes): CompetitorsState {
  switch (action.type) {

    case FETCH_INITIAL_COMPETITORS:
      return { ...competitorsState, competitors: action.payload }

      case TOGGLE_COMPETITOR:
        const index = competitorsState.competitors.findIndex(c => c.id === action.payload.id);
        const newState = produce(competitorsState, draft => {
            draft.competitors[index].compete = action.payload.compete;
        });
        return newState;

        case FETCH_TOURNAMENT_COMPETITORS:
          return { ...competitorsState, competitors: action.payload }
        
    default:
      return competitorsState;
  }
};

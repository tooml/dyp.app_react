import { FETCH_COMPETITORS, CompetitorActionTypes, TOGGLE_COMPETITOR } from '../actions/CompetitorAction';
import { CompetitorsState, initialState } from '../store/CompetitorStore';
import produce from 'immer';

export function competitorsReducer(competitorsState: CompetitorsState = initialState, action: CompetitorActionTypes): CompetitorsState {
  switch (action.type) {
    case FETCH_COMPETITORS:
      return { ...competitorsState, competitors: action.payload }

      case TOGGLE_COMPETITOR:
            return produce(competitorsState, draft => {
                let competitorIndex = draft.competitors.findIndex(competitor => competitor.person.id === action.payload);
                draft.competitors[competitorIndex].compete = !draft.competitors[competitorIndex].compete
            });

    default:
      return competitorsState;
  }
};

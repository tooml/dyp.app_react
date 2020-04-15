import { combineReducers } from 'redux';
import { PersonsState } from './PersonStore';
import { CompetitorsState } from './CompetitorStore';
import { MessageState } from './MessageStore';
import { LoadingState } from './LoadingStore';
import { OptionsState } from './OptionsStore';
import { TournamentState } from './TournamentStore';
import { personsReducer } from '../reducers/PersonReducers';
import { competitorsReducer } from '../reducers/CompetitorReducer';
import { messageReducer } from '../reducers/MessageReducers';
import { loadingReducer } from '../reducers/LoadingReducer';
import { optionsReducer } from '../reducers/OptionsReducers';
import { tournamentReducer } from '../reducers/TournamentReducer';


export interface StoreState {
    personsState: PersonsState,
    competitorsState: CompetitorsState,
    messageState: MessageState,
    loadingState: LoadingState,
    optionsState: OptionsState,
    tournamentsState: TournamentState
  }

  export const reducers = combineReducers({
    personsState: personsReducer,
    competitorsState: competitorsReducer,
    messageState: messageReducer,
    loadingState: loadingReducer,
    optionsState: optionsReducer,
    tournamentsState: tournamentReducer
 });

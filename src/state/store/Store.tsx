import { combineReducers } from 'redux';
import { PersonsState } from './PersonStore';
import { CompetitorsState } from './CompetitorStore';
import { MessageState } from './MessageStore';
import { OptionsState } from './OptionsStore';
import { TournamentState } from './TournamentStore';
import { personsReducer } from '../reducers/PersonReducers';
import { competitorsReducer } from '../reducers/CompetitorReducer';
import { messageReducer } from '../reducers/MessageReducers';
import { optionsReducer } from '../reducers/OptionsReducers';
import { tournamentReducer } from '../reducers/TournamentReducer';


export interface StoreState {
    personsState: PersonsState,
    competitorsState: CompetitorsState,
    messageState: MessageState,
    optionsState: OptionsState,
    tournamentsState: TournamentState
  }

  export const reducers = combineReducers({
    personsState: personsReducer,
    competitorsState: competitorsReducer,
    messageState: messageReducer,
    optionsState: optionsReducer,
    tournamentsState: tournamentReducer
 });

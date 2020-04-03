import { combineReducers } from 'redux';
import { PersonsState } from './PersonStore';
import { MessageState } from './MessageStore';
import { OptionsState } from './OptionsStore';
import { TournamentState } from './TournamentStore';
import { personsReducer } from '../reducers/PersonReducers';
import { messageReducer } from '../reducers/MessageReducers';
import { optionsReducer } from '../reducers/OptionsReducers';
import { tournamentReducer } from '../reducers/TournamentReducer';

export interface StoreState {
    personsState: PersonsState,
    messageState: MessageState,
    optionsState: OptionsState,
    tournamentsState: TournamentState
  }

  export const reducers = combineReducers({
    personsState: personsReducer,
    messageState: messageReducer,
    optionsState: optionsReducer,
    tournamentsState: tournamentReducer
 });

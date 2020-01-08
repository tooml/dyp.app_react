import { combineReducers } from 'redux';
import { PersonsState } from './PersonStore';
import { MessageState } from './MessageStore';
import { OptionsState } from './OptionsStore';
import { personsReducer } from '../reducers/PersonReducers';
import { messageReducer } from '../reducers/MessageReducers';
import { optionsReducer } from '../reducers/OptionsReducers';

export interface StoreState {
    personsState: PersonsState,
    messageState: MessageState,
    optionsState: OptionsState
  }

  export const reducers = combineReducers({
    personsState: personsReducer,
    messageState: messageReducer,
    optionsState: optionsReducer
 });
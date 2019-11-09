import { combineReducers } from 'redux';
import { personsReducer } from '../reducers/PersonReducers';

export interface Person {
    id: string,
    firstName: string,
    lastName: string
}

export interface PersonsState {
    persons: Person[],
    person: Person
  }

export interface StoreState {
  personsState: PersonsState,
}

export const initialState: PersonsState = {
    persons: [],
    person: {id: "", firstName: "", lastName: ""}
}

export const reducers = combineReducers({
   personsState: personsReducer
});

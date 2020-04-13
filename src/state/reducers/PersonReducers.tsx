import { PersonActionTypes, FETCH_PERSONS, SELECT_PERSON, SAVE_PERSON } from '../actions/PersonActions';
import { initialState, PersonsState } from './../store/PersonStore';
import produce from 'immer';

export function personsReducer(personsState: PersonsState = initialState, action: PersonActionTypes): PersonsState {
  switch (action.type) {
    
    case FETCH_PERSONS:
      return { ...personsState, persons: action.payload }

    case SELECT_PERSON:
      return { ...personsState, person: action.payload }

    case SAVE_PERSON:
      const index = personsState.persons.findIndex(p => p.id === action.payload.id);
      const newState = produce(personsState, draft => {
        if (index === -1) {
          draft.persons.push(action.payload);
        } else {
          draft.persons[index].firstName = action.payload.firstName;
          draft.persons[index].lastName = action.payload.lastName;
        }
      });
      return newState;

    default:
      return personsState;
  }
};

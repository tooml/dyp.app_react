import { PersonActionTypes, FETCH_PERSONS, SELECT_PERSON, SAVE_PERSON, DELETE_PERSON } from '../actions/PersonActions';
import { initialState, PersonsState } from './../store/PersonStore';
import produce from 'immer';

export function personsReducer(personsState: PersonsState = initialState, action: PersonActionTypes): PersonsState {
  switch (action.type) {

    case FETCH_PERSONS:
      return { ...personsState, persons: action.payload }

    case SELECT_PERSON:
      return { ...personsState, person: action.payload }

    case SAVE_PERSON:
      const save_index = personsState.persons.findIndex(p => p.id === action.payload.id);
      const newState = produce(personsState, draft => {
        if (save_index === -1) {
          draft.persons.push(action.payload);
        } else {
          draft.persons[save_index].firstName = action.payload.firstName;
          draft.persons[save_index].lastName = action.payload.lastName;
        }
      });
      return newState;

    case DELETE_PERSON:
      const delete_index = personsState.persons.findIndex(p => p.id === action.payload.id);
      return produce(personsState, draft => {
        draft.persons.splice(delete_index, 1);
      });

    default:
      return personsState;
  }
};

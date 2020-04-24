import { PersonActionTypes, FETCH_PERSONS, SELECT_PERSON, SAVE_PERSON, DELETE_PERSON, FETCH_PERSON_STATS, FETCH_PERSON_AVATARS } from '../actions/PersonActions';
import { initialState, PersonsState } from './../store/PersonStore';
import produce from 'immer';

export function personsReducer(personsState: PersonsState = initialState, action: PersonActionTypes): PersonsState {
  switch (action.type) {

    case FETCH_PERSONS:
      return { ...personsState, persons: action.payload }

    case FETCH_PERSON_AVATARS:
      return { ...personsState, avatars: action.payload }

    case SELECT_PERSON:
      return { ...personsState, person: action.payload }

    case FETCH_PERSON_STATS:
      return { ...personsState, personStats: action.payload }

    case SAVE_PERSON:
      const save_index_person = personsState.persons.findIndex(p => p.id === action.payload[0].id);
      const save_index_avatar = personsState.avatars.findIndex(p => p.personId === action.payload[0].id);
      const newState = produce(personsState, draft => {
        if (save_index_person === -1) {
          draft.persons.push(action.payload[0]);
        } else {
          draft.persons[save_index_person].firstName = action.payload[0].firstName;
          draft.persons[save_index_person].lastName = action.payload[0].lastName;
        }
        if (save_index_avatar === -1) draft.avatars.push(action.payload[1])
        else draft.avatars[save_index_avatar].avatar = action.payload[1].avatar;
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

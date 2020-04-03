import Person from '../../contracts/data/Person';

export interface PersonsState {
  persons: Person[],
  person: Person
}

export const initialState: PersonsState = {
  persons: [],
  person: { id: '', firstName: '', lastName: '' }
}

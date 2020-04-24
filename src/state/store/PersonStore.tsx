import { Person, PersonStats, PersonAvatar } from '../../contracts/data/Person';

export interface PersonsState {
  persons: Person[],
  avatars: PersonAvatar[],
  person: Person,
  personStats: PersonStats
}

export const initialState: PersonsState = {
  persons: [],
  avatars: [],
  person: { id: '', firstName: '', lastName: '' },
  personStats: { tournaments: 0, matches: 0, wins: 0, loose: 0, drawn: 0}
}

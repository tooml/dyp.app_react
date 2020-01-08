
export interface Person {
  id: string,
  firstName: string,
  lastName: string
}

export interface PersonsState {
  persons: Person[],
  person: Person
}

export const initialState: PersonsState = {
  persons: [],
  person: { id: "", firstName: "", lastName: "" }
}

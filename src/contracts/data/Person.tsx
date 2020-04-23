
export interface Person {
  id: string,
  firstName: string,
  lastName: string,
  image: string,
}

export interface PersonStats {
  tournaments: number,
  matches: number,
  wins: number,
  loose: number,
  drawn: number
}

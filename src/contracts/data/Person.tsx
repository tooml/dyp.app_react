export interface Person {
  id: string,
  firstName: string,
  lastName: string
}

export interface PersonAvatar {
  personId: string,
  avatar: string
}

export interface PersonStats {
  tournaments: number,
  matches: number,
  wins: number,
  loose: number,
  drawn: number
}

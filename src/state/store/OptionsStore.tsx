
export interface OptionsState {
    tournamentName: string,
    tables: number,
    points: number,
    pointsDrawn: number,
    drawn: boolean,
    sets: number,
    walkover: boolean
}

export const initialState: OptionsState = {
    tournamentName: "",
    tables: 1,
    points: 2,
    pointsDrawn: 1,
    drawn: false,
    sets: 2,
    walkover: true
}

import Options from '../../contracts/data/Options';

export interface OptionsState {
    options: Options
}

export const initialOptions: Options = {
    tournamentName: '',
    tables: 1,
    points: 2,
    pointsDrawn: 1,
    drawn: false,
    sets: 2,
    fairLots: false
} 

export const initialState: OptionsState = {
    options: initialOptions
}

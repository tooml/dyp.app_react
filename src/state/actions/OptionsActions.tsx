import { Dispatch } from 'redux';

export const FETCH_OPTIONS = 'FETCH_OPTIONS'
export const SET_TOURNAMENT_NAME = 'SET_TOURNAMENT_NAME'
export const SET_TABLES_OPTION = 'SET_TABLES_OPTION'
export const SET_POINTS_OPTION = 'SET_POINTS_OPTION'
export const SET_POINTS_DRAWN_OPTION = 'SET_POINTS_DRAWN_OPTION'
export const SET_DRAWN_OPTION = 'SET_DRAWN_OPTION'
export const SET_SETS_OPTION = 'SET_SETS_OPTION'
export const SET_FAIR_LOTS_OPTION = 'SET_FAIR_LOTS_OPTION'

export interface FetchOptionsAction {
    type: typeof FETCH_OPTIONS;
}

export interface SetTournamentNameAction {
    type: typeof SET_TOURNAMENT_NAME;
    payload: string;
}

export interface SetTablesOptionAction {
    type: typeof SET_TABLES_OPTION;
    payload: number;
}

export interface SetPointsOptionAction {
    type: typeof SET_POINTS_OPTION;
    payload: number;
}

export interface SetPointsDrawnOptionAction {
    type: typeof SET_POINTS_DRAWN_OPTION;
    payload: number;
}

export interface SetDrawnOptionAction {
    type: typeof SET_DRAWN_OPTION;
    payload: boolean;
}

export interface SetSetsOptionAction {
    type: typeof SET_SETS_OPTION;
    payload: number;
}

export interface SetFairLotsOptionAction {
    type: typeof SET_FAIR_LOTS_OPTION;
    payload: boolean;
}

export type OptionsActionTypes = FetchOptionsAction | SetTournamentNameAction | SetDrawnOptionAction |
    SetTablesOptionAction | SetPointsOptionAction | SetPointsDrawnOptionAction | SetSetsOptionAction |
    SetFairLotsOptionAction

export const fetchInitialOptions = () => {
    return async (dispatch: Dispatch) => {
        dispatch<FetchOptionsAction>({
            type: FETCH_OPTIONS
        });
    }
};

export const setTournamentName = (name: string) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetTournamentNameAction>({
            type: SET_TOURNAMENT_NAME,
            payload: name
        });
    };
};

export const setTablesOption = (tables: number) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetTablesOptionAction>({
            type: SET_TABLES_OPTION,
            payload: tables
        });
    };
};

export const setPointsOption = (points: number) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetPointsOptionAction>({
            type: SET_POINTS_OPTION,
            payload: points
        });
    };
};

export const setPointsDrawnOption = (pointsDrawn: number) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetPointsDrawnOptionAction>({
            type: SET_POINTS_DRAWN_OPTION,
            payload: pointsDrawn
        });
    };
};

export const setDrawnOption = (drawn: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetDrawnOptionAction>({
            type: SET_DRAWN_OPTION,
            payload: drawn
        });
    };
};

export const setSetsOption = (sets: number) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetSetsOptionAction>({
            type: SET_SETS_OPTION,
            payload: sets
        });
    };
};

export const setFairLotsOption = (fairLots: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetFairLotsOptionAction>({
            type: SET_FAIR_LOTS_OPTION,
            payload: fairLots
        });
    };
};

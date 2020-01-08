import { OptionsState, initialState } from "../store/OptionsStore";
import {
    OptionsActionTypes, FETCH_DEFAULT_OPTIONS, SET_TOURNAMENT_NAME, SET_DRAWN_OPTION,
    SET_TABLES_OPTION, SET_POINTS_OPTION, SET_POINTS_DRAWN_OPTION, SET_SETS_OPTION,
    SET_WALKOVER_OPTION
} from "../actions/OptionsActions";

export function optionsReducer(optionsState: OptionsState = initialState, action: OptionsActionTypes): OptionsState {
    switch (action.type) {
        case FETCH_DEFAULT_OPTIONS:
            return optionsState;

        case SET_TOURNAMENT_NAME:
            return { ...optionsState, tournamentName: action.payload }

        case SET_TABLES_OPTION:
            return { ...optionsState, tables: action.payload }

        case SET_POINTS_OPTION:
            return { ...optionsState, points: action.payload }

        case SET_POINTS_DRAWN_OPTION:
            return { ...optionsState, pointsDrawn: action.payload }

        case SET_DRAWN_OPTION:
            return { ...optionsState, drawn: action.payload }

        case SET_SETS_OPTION:
            return { ...optionsState, sets: action.payload }

        case SET_WALKOVER_OPTION:
            return { ...optionsState, walkover: action.payload }

        default:
            return optionsState;
    }
}

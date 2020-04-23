import { OptionsState, initialState } from "../store/OptionsStore";
import {
    OptionsActionTypes, FETCH_OPTIONS, SET_TOURNAMENT_NAME, SET_DRAWN_OPTION,
    SET_TABLES_OPTION, SET_POINTS_OPTION, SET_POINTS_DRAWN_OPTION, SET_SETS_OPTION,
    SET_FAIR_LOTS_OPTION
} from "../actions/OptionsActions";
import produce from "immer";

export function optionsReducer(optionsState: OptionsState = initialState, action: OptionsActionTypes): OptionsState {
    switch (action.type) {
        case FETCH_OPTIONS:
            return initialState;

        case SET_TOURNAMENT_NAME:
            return produce(optionsState, draft => {
                draft.options.tournamentName = action.payload;
            });

        case SET_TABLES_OPTION:
            return produce(optionsState, draft => {
                draft.options.tables = action.payload;
            });

        case SET_POINTS_OPTION:
            return produce(optionsState, draft => {
                draft.options.points = action.payload;
            });

        case SET_POINTS_DRAWN_OPTION:
            return produce(optionsState, draft => {
                draft.options.pointsDrawn = action.payload;
            });

        case SET_DRAWN_OPTION:
            return produce(optionsState, draft => {
                draft.options.drawn = action.payload;
            });

        case SET_SETS_OPTION:
            return produce(optionsState, draft => {
                draft.options.sets = action.payload;
            });
        case SET_FAIR_LOTS_OPTION:
            return produce(optionsState, draft => {
                draft.options.fairLots = action.payload;
            });

        default:
            return optionsState;
    }
}

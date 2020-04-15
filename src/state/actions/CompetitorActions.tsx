import { Dispatch } from 'redux';
import * as api from '../../api/Api'
import { Competitor } from '../../contracts/data/Competitor';
import { ShowMessageAction, SHOW_MESSAGE, createToastMessage } from './MessageActions';
import { LoadingAction, LOADING } from './LoadingActions';

export const FETCH_INITIAL_COMPETITORS = 'FETCH_INITIAL_COMPETITORS'
export const TOGGLE_COMPETITOR = 'TOGGLE_COMPETITOR'
export const FETCH_TOURNAMENT_COMPETITORS = 'FETCH_TOURNAMENT_COMPETITORS'
export const SAVE_TOURNAMENT_COMPETITORS = 'SAVE_TOURNAMENT_COMPETITORS'

export interface FetchIntitialCompetitorsAction {
    type: typeof FETCH_INITIAL_COMPETITORS;
    payload: Competitor[];
}

export interface ToggleCompetitorAction {
    type: typeof TOGGLE_COMPETITOR;
    payload: Competitor;
}

export interface FetchTournamentCompetitorsAction {
    type: typeof FETCH_TOURNAMENT_COMPETITORS;
    payload: Competitor[];
}

export interface SaveTournamentCompetitorsAction {
    type: typeof SAVE_TOURNAMENT_COMPETITORS;
}

export type CompetitorsActionTypes = FetchIntitialCompetitorsAction | ToggleCompetitorAction |
    FetchTournamentCompetitorsAction | SaveTournamentCompetitorsAction;

export const fetchInitialCompetitors = () => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: true
        });
        api.getCompetitors().then(initialCompetitors => {
            dispatch<FetchIntitialCompetitorsAction>({
                type: FETCH_INITIAL_COMPETITORS,
                payload: initialCompetitors
            });
        }).finally(() => {
            dispatch<LoadingAction>({
                type: LOADING,
                payload: false
            });
        })
    };
};

export const toggleCompetitor = (competitor: Competitor) => {
    return async (dispatch: Dispatch) => {
        dispatch<ToggleCompetitorAction>({
            type: TOGGLE_COMPETITOR,
            payload: competitor
        });
    };
};

export const fetchTournamentCompetitors = (tournamentId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: true
        });
        api.getTournamentCompetitors(tournamentId).then(competitors => {
            dispatch<FetchTournamentCompetitorsAction>({
                type: FETCH_TOURNAMENT_COMPETITORS,
                payload: competitors
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        }).finally(() => {
            dispatch<LoadingAction>({
                type: LOADING,
                payload: false
            });
        });
    };
};

export const saveTournamentCompetitors = (tournamentId: string, competitorIds: string[]) => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: true
        });
        api.saveTournamentCompetitors(tournamentId, competitorIds).then(result => {
            dispatch<any>(fetchTournamentCompetitors(tournamentId));
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage('save', 'success', 600)
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        }).finally(() => {
            dispatch<LoadingAction>({
                type: LOADING,
                payload: false
            });
        });
    };
};

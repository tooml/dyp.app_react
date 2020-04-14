import { Dispatch } from 'redux';
import * as api from '../../api/Api'
import TournamentInfo from '../../contracts/data/TournamentInfo';
import { Tournament, Round, Match, RankingRow } from '../../contracts/data/Tournament';
import { ShowMessageAction, SHOW_MESSAGE, createToastMessage } from './MessageActions';
import Options from '../../contracts/data/Options';

export const FETCH_TOURNAMENTS = 'FETCH_TOURNAMENTS'
export const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT'
export const LOAD_TOURNAMENT = 'LOAD_TOURNAMENT'
export const NEW_ROUND = 'NEW_ROUND'
export const SELECT_MATCH = 'SELECT_MATCH'
export const SAVE_MATCH_RESULT = 'SAVE_MATCH_RESULT'
export const RESET_MATCH_RESULT = 'RESET_MATCH_RESULT'
export const FETCH_TOURNAMENT_RANKING = 'FETCH_TOURNAMENT_RANKING'
export const SET_TOURNAMENT_TABLES_OPTION = 'SET_TOURNAMENT_TABLES_OPTION'
export const SET_TOURNAMENT_POINTS_OPTION = 'SET_TOURNAMENT_POINTS_OPTION'
export const SET_TOURNAMENT_POINTS_DRAWN_OPTION = 'SET_TOURNAMENT_POINTS_DRAWN_OPTION'
export const SET_TOURNAMENT_DRAWN_OPTION = 'SET_TOURNAMENT_DRAWN_OPTION'
export const SET_TOURNAMENT_SETS_OPTION = 'SET_TOURNAMENT_SETS_OPTION'
export const SET_TOURNAMENT_WALKOVER_OPTION = 'SET_TOURNAMENT_WALKOVER_OPTION'

export interface FetchTournamentsAction {
    type: typeof FETCH_TOURNAMENTS;
    payload: TournamentInfo[];
}

export interface DeleteTournamentAction {
    type: typeof DELETE_TOURNAMENT;
    payload: TournamentInfo;
}

export interface LoadTournamenAction {
    type: typeof LOAD_TOURNAMENT;
    payload: Tournament;
}

export interface NewRoundAction {
    type: typeof NEW_ROUND;
    payload: Round;
}

export interface SelectMatchAction {
    type: typeof SELECT_MATCH;
    payload: Match;
}

export interface SaveMatchResultAction {
    type: typeof SAVE_MATCH_RESULT;
    payload: Match;
}

export interface ResetMatchResultAction {
    type: typeof RESET_MATCH_RESULT;
    payload: Match;
}

export interface FetchTournamentRankingAction {
    type: typeof FETCH_TOURNAMENT_RANKING;
    payload: RankingRow[];
}

export interface SetTournamentTablesOptionAction {
    type: typeof SET_TOURNAMENT_TABLES_OPTION;
    payload: number;
}

export interface SetTournamentPointsOptionAction {
    type: typeof SET_TOURNAMENT_POINTS_OPTION;
    payload: number;
}

export interface SetTournamentPointsDrawnOptionAction {
    type: typeof SET_TOURNAMENT_POINTS_DRAWN_OPTION;
    payload: number;
}

export interface SetTournamentDrawnOptionAction {
    type: typeof SET_TOURNAMENT_DRAWN_OPTION;
    payload: boolean;
}

export interface SetTournamentSetsOptionAction {
    type: typeof SET_TOURNAMENT_SETS_OPTION;
    payload: number;
}

export interface SetTournamentWalkoverOptionAction {
    type: typeof SET_TOURNAMENT_WALKOVER_OPTION;
    payload: boolean;
}

export type TournamentsActionTypes = FetchTournamentsAction | DeleteTournamentAction | LoadTournamenAction |
    NewRoundAction | SelectMatchAction | SaveMatchResultAction | ResetMatchResultAction | FetchTournamentRankingAction |
    SetTournamentTablesOptionAction | SetTournamentPointsOptionAction | SetTournamentPointsDrawnOptionAction |
    SetTournamentDrawnOptionAction | SetTournamentSetsOptionAction | SetTournamentWalkoverOptionAction

export const createNewTournament = (options: Options, ids: string[]) => {
    return async (dispatch: Dispatch) => {
        api.createTournament(options, ids)
            .then(result => {
                dispatch<any>(fetchTournaments())
            }).catch((error) => {
                dispatch<ShowMessageAction>({
                    type: SHOW_MESSAGE,
                    payload: createToastMessage(error, 'warning', 3000)
                });
            });
    };
};

export const deleteTournament = (tournament: TournamentInfo) => {
    return async (dispatch: Dispatch) => {
        api.delteTournament(tournament.id).then(result => {
            dispatch<DeleteTournamentAction>({
                type: DELETE_TOURNAMENT,
                payload: tournament
            });
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage('save', 'success', 600)
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        });
    };
};

export const fetchTournaments = () => {
    return async (dispatch: Dispatch) => {
        api.getTournaments().then(tournaments => {
            dispatch<FetchTournamentsAction>({
                type: FETCH_TOURNAMENTS,
                payload: tournaments
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        });
    };
};

export const loadTournament = (tournamentId: string) => {
    return async (dispatch: Dispatch) => {
        api.loadTournament(tournamentId).then(tournament => {
            dispatch<LoadTournamenAction>({
                type: LOAD_TOURNAMENT,
                payload: tournament
            })
        }).then(dispatch<any>(fetchTournamentRanking(tournamentId))).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        });
    };
};

export const newRound = (tournamentId: string) => {
    return async (dispatch: Dispatch) => {
        api.createRound(tournamentId).then(result => {
            api.loadLastTournamentRound(tournamentId).then(round => {
                dispatch<NewRoundAction>({
                    type: NEW_ROUND,
                    payload: round
                });
            }).catch((error) => {
                dispatch<ShowMessageAction>({
                    type: SHOW_MESSAGE,
                    payload: createToastMessage(error, 'warning', 3000)
                });
            });
        });
    };
};

export const selectMatch = (match: Match): SelectMatchAction => {
    return {
        type: SELECT_MATCH,
        payload: match
    };
};

export const saveMatchResult = (match: Match, tournamentId: string) => {
    return async (dispatch: Dispatch) => {
        api.saveMatchResult(match.id, match.setResults).then(() => {
            dispatch<SaveMatchResultAction>({
                type: SAVE_MATCH_RESULT,
                payload: match
            })
        }).then(() => {
            dispatch<any>(fetchTournamentRanking(tournamentId));
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage('save', 'success', 600)
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        });
    };
};

export const resetMatchResult = (match: Match, tournamentId: string) => {
    return async (dispatch: Dispatch) => {
        api.resetMatchResult(match.id).then(() => {
            dispatch<ResetMatchResultAction>({
                type: RESET_MATCH_RESULT,
                payload: match
            })
        }).then(() => {
            dispatch<any>(fetchTournamentRanking(tournamentId));
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage('save', 'success', 600)
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        });
    };
};

export const fetchTournamentRanking = (tournamentId: string) => {
    return async (dispatch: Dispatch) => {
        api.getTournamentRanking(tournamentId).then(ranking => {
            dispatch<FetchTournamentRankingAction>({
                type: FETCH_TOURNAMENT_RANKING,
                payload: ranking
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        });
    };
};

export const setTournamentTablesOption = (tables: number) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetTournamentTablesOptionAction>({
            type: SET_TOURNAMENT_TABLES_OPTION,
            payload: tables
        });
    };
};

export const setTournamentPointsOption = (points: number) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetTournamentPointsOptionAction>({
            type: SET_TOURNAMENT_POINTS_OPTION,
            payload: points
        });
    };
};

export const setTournamentPointsDrawnOption = (pointsDrawn: number) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetTournamentPointsDrawnOptionAction>({
            type: SET_TOURNAMENT_POINTS_DRAWN_OPTION,
            payload: pointsDrawn
        });
    };
};

export const setTournamentDrawnOption = (drawn: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetTournamentDrawnOptionAction>({
            type: SET_TOURNAMENT_DRAWN_OPTION,
            payload: drawn
        });
    };
};

export const setTournamentSetsOption = (sets: number) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetTournamentSetsOptionAction>({
            type: SET_TOURNAMENT_SETS_OPTION,
            payload: sets
        });
    };
};

export const setTournamentWalkoverOption = (walkover: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch<SetTournamentWalkoverOptionAction>({
            type: SET_TOURNAMENT_WALKOVER_OPTION,
            payload: walkover
        });
    };
};

export const changeTournamentOptions = (tournamentId: string, options: Options) => {
    return async (dispatch: Dispatch) => {
        api.saveTournamentOptions(tournamentId, options).then(result => {
            dispatch<any>(fetchTournamentRanking(tournamentId));
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage('save', 'success', 600)
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        });
    }
};
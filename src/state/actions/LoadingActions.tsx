import { Dispatch } from 'redux';

export const LOADING = 'LOADING'

export interface LoadingAction {
    type: typeof LOADING;
    payload: boolean,
}

export type LoadingActionTypes = LoadingAction

export const showLoading = (load: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: load
        });
    };
};

import { Dispatch } from 'redux';
import * as api from '../../api/Api'
import Tournament from '../../contracts/data/Tournament';


export const FETCH_TOURNAMENTS = 'FETCH_TOURNAMENTS'


export interface FetchTournamentsAction {
    type: typeof FETCH_TOURNAMENTS;
    payload: Tournament[];
}


export type TournamentsActionTypes = FetchTournamentsAction;

export const fetchTournaments = () => {
    return async (dispatch: Dispatch) => {
        api.getTournaments().then(tournaments => {
            dispatch<FetchTournamentsAction>({
                type: FETCH_TOURNAMENTS,
                payload: tournaments
            });
        })
    };
};

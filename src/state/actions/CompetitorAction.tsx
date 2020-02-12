import { Dispatch } from 'redux';
import * as api from '../../api/Api'
import Competitor from '../../contracts/data/Competitor';
import { OptionsState } from '../store/OptionsStore';

export const FETCH_COMPETITORS = 'FETCH_COMPETITORS'
export const TOGGLE_COMPETITOR = 'TOGGLE_COMPETITOR'

export interface FetchCompetitorsAction {
    type: typeof FETCH_COMPETITORS;
    payload: Competitor[];
}

export interface ToggleCompetitorAction {
    type: typeof TOGGLE_COMPETITOR;
    payload: string;
}

export type CompetitorActionTypes = FetchCompetitorsAction | ToggleCompetitorAction;

export const fetchCompetitors = () => {
    return async (dispatch: Dispatch) => {
        api.getPersons().then(persons => {
            const competitors: Competitor[] = persons.map(person => { return { person: person, compete: false } as Competitor });
            dispatch<FetchCompetitorsAction>({
                type: FETCH_COMPETITORS,
                payload: competitors
            });
        })
    };
};

export const toggleCompetitor = (personId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch<ToggleCompetitorAction>({
            type: TOGGLE_COMPETITOR,
            payload: personId
        });
    };
};

export const createNewTournament = (options: OptionsState, ids: string[]) => {
    return async (dispatch: Dispatch) => {
        api.createTournament(options, ids).then(result => console.log(result));
    };
};

import { Person, PersonStats, PersonAvatar } from '../../contracts/data/Person';
import { Dispatch } from 'redux';
import * as api from '../../api/Api'
import { ShowMessageAction, SHOW_MESSAGE, createToastMessage } from './MessageActions';
import { LoadingAction, LOADING } from './LoadingActions';
import { warningMessageDuration, defaultMessageDuration } from './Constants';

export const FETCH_PERSONS = 'FETCH_PERSONS'
export const FETCH_PERSON_AVATARS = 'FETCH_PERSON_AVATARS'
export const FETCH_PERSON_STATS = 'FETCH_PERSON_STATS'
export const SELECT_PERSON = 'SELECT_PERSON'
export const SAVE_PERSON = 'SAVE_PERSON'
export const SAVE_PERSON_AVATAR = 'SAVE_PERSON_AVATAR'
export const DELETE_PERSON = 'DELETE_PERSON'

export interface FetchPersonsAction {
    type: typeof FETCH_PERSONS;
    payload: Person[];
}

export interface FetchPersonAvatarsAction {
    type: typeof FETCH_PERSON_AVATARS;
    payload: PersonAvatar[];
}

export interface FetchPersonStatsAction {
    type: typeof FETCH_PERSON_STATS;
    payload: PersonStats;
}

export interface SelectPersonAction {
    type: typeof SELECT_PERSON;
    payload: Person;
}

export interface SavePersonAction {
    type: typeof SAVE_PERSON;
    payload: [Person, PersonAvatar];
}

export interface DeletePersonAction {
    type: typeof DELETE_PERSON;
    payload: Person;
}

export type PersonActionTypes = FetchPersonsAction | FetchPersonAvatarsAction | FetchPersonStatsAction |
    SelectPersonAction | SavePersonAction | DeletePersonAction;

export const fetchPersons = () => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: true
        });
        api.getPersons().then(persons => {
            dispatch<FetchPersonsAction>({
                type: FETCH_PERSONS,
                payload: persons
            });
        })
            .catch((error) => {
                dispatch<ShowMessageAction>({
                    type: SHOW_MESSAGE,
                    payload: createToastMessage(error, 'warning', warningMessageDuration)
                });
            })
            .finally(() => {
                dispatch<LoadingAction>({
                    type: LOADING,
                    payload: false
                });
            });
    };
};

export const fetchPersonAvatars = () => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: true
        });
        api.getPersonAvatars().then(avatars => {
            dispatch<FetchPersonAvatarsAction>({
                type: FETCH_PERSON_AVATARS,
                payload: avatars
            });
        })
            .catch((error) => {
                dispatch<ShowMessageAction>({
                    type: SHOW_MESSAGE,
                    payload: createToastMessage(error, 'warning', warningMessageDuration)
                });
            })
            .finally(() => {
                dispatch<LoadingAction>({
                    type: LOADING,
                    payload: false
                });
            });
    };
};

export const newPerson = () => {
    return async (dispatch: Dispatch) => {
        api.getPersonTemplate().then(newPerson => {
            dispatch<SelectPersonAction>({
                type: SELECT_PERSON,
                payload: newPerson
            });
        })
            .catch((error) => {
                dispatch<ShowMessageAction>({
                    type: SHOW_MESSAGE,
                    payload: createToastMessage(error, 'warning', warningMessageDuration)
                });
            });
    };
};

export const selectPerson = (person: Person) => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: true
        });
        api.getPersonStats(person.id).then(stats => {
            dispatch<FetchPersonStatsAction>({
                type: FETCH_PERSON_STATS,
                payload: stats
            });
        }).then(() => {
            dispatch<SelectPersonAction>({
                type: SELECT_PERSON,
                payload: person
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', warningMessageDuration)
            });
        }).finally(() => {
            dispatch<LoadingAction>({
                type: LOADING,
                payload: false
            });
        });
    };
};

export const savePerson = (person: Person, personAvatar: string) => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: true
        });
        api.savePersons(person, personAvatar).then(result => {
            dispatch<SavePersonAction>({
                type: SAVE_PERSON,
                payload: [person, { personId: person.id, avatar: personAvatar }]
            });
        }).then(() => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage('save', 'success', defaultMessageDuration)
            });
        })
            .catch((error) => {
                dispatch<ShowMessageAction>({
                    type: SHOW_MESSAGE,
                    payload: createToastMessage(error, 'warning', warningMessageDuration)
                });
            }).finally(() => {
                dispatch<LoadingAction>({
                    type: LOADING,
                    payload: false
                });
            });
    };
};

export const deletePerson = (person: Person) => {
    return async (dispatch: Dispatch) => {
        dispatch<LoadingAction>({
            type: LOADING,
            payload: true
        });
        api.deltePerson(person.id).then(result => {
            dispatch<DeletePersonAction>({
                type: DELETE_PERSON,
                payload: person
            });
        }).then(() => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage('save', 'success', defaultMessageDuration)
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', warningMessageDuration)
            });
        });
    };
};

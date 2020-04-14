import Person from '../../contracts/data/Person';
import { Dispatch } from 'redux';
import * as api from '../../api/Api'
import { ShowMessageAction, SHOW_MESSAGE, createToastMessage } from './MessageActions';

export const FETCH_PERSONS = 'FETCH_PERSONS'
export const SELECT_PERSON = 'SELECT_PERSON'
export const SAVE_PERSON = 'SAVE_PERSON'
export const DELETE_PERSON = 'DELETE_PERSON'

export interface FetchPersonsAction {
    type: typeof FETCH_PERSONS;
    payload: Person[];
}

export interface SelectPersonAction {
    type: typeof SELECT_PERSON;
    payload: Person;
}

export interface SavePersonAction {
    type: typeof SAVE_PERSON;
    payload: Person;
}

export interface DeletePersonAction {
    type: typeof DELETE_PERSON;
    payload: Person;
}

export type PersonActionTypes = FetchPersonsAction | SelectPersonAction | SavePersonAction | DeletePersonAction;

export const fetchPersons = () => {
    return async (dispatch: Dispatch) => {
        api.getPersons().then(persons => {
            dispatch<FetchPersonsAction>({
                type: FETCH_PERSONS,
                payload: persons
            });
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
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
        }).catch((error) => {
            dispatch<ShowMessageAction>({
                type: SHOW_MESSAGE,
                payload: createToastMessage(error, 'warning', 3000)
            });
        });
    };
};

export const selectPerson = (person: Person): SelectPersonAction => {
    return {
        type: SELECT_PERSON,
        payload: person
    };
};

export const savePerson = (person: Person) => {
    return async (dispatch: Dispatch) => {
        api.savePersons(person).then(result => {
            dispatch<SavePersonAction>({
                type: SAVE_PERSON,
                payload: person
            });
        }).then(() => {
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

export const deletePerson = (person: Person) => {
    return async (dispatch: Dispatch) => {
        api.deltePerson(person.id).then(result => {
            dispatch<DeletePersonAction>({
                type: DELETE_PERSON,
                payload: person
            });
        }).then(() => {
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

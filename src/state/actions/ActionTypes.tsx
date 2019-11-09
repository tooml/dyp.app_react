import { Dispatch } from 'redux';
import { Person } from '../store/PersonStore'
import * as api from '../../api/Api'


export const FETCH_PERSONS = 'FETCH_PERSONS'
export const SELECT_PERSON = 'SELECT_PERSON'
export const SAVE_PERSON = 'SAVE_PERSON'


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

export type PersonActionTypes = FetchPersonsAction | SelectPersonAction | SavePersonAction;


export const fetchPersons = () => {
    return async (dispatch: Dispatch) => {
        api.getPersons().then(persons => {
            console.log(persons);
            dispatch<FetchPersonsAction>({
                type: FETCH_PERSONS,
                payload: persons
            });
        })
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
        })
    };
};

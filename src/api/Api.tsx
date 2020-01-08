import axios from 'axios';
import { Person } from '../state/store/PersonStore';

interface PersonStockQueryResult {
    persons: Person[];
}

interface PersonTemplateQueryResult {
    id: string;
    firstName: string;
    lastName: string;
}

interface StorePersonCommand {
    id: string;
    firstName: string;
    lastName: string;
}


axios.defaults.baseURL = 'http://localhost/api/v1/';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
  };

export const getPersons = async () => {
    return await axios.get<PersonStockQueryResult>('/person/all').then(response => {
        return response.data.persons;
     });
}

export const getPersonTemplate = async () => {
    return await axios.get<PersonTemplateQueryResult>('/person/template').then(response => {
        const personTemplate = response.data;
        const newPerson: Person = { 
            id: personTemplate.id, 
            firstName: personTemplate.firstName, 
            lastName: personTemplate.lastName 
        };

        return newPerson; }
    );
}

export const savePersons = async (person: Person) => {
    const command: StorePersonCommand = { id: person.id, firstName: person.firstName, lastName: person.lastName };
    return await axios.post('/person', command, axiosConfig).then(response => {
        return response;
     });
}

import axios from 'axios';
import Person from '../contracts/data/Person';
import { OptionsState } from '../state/store/OptionsStore';
import Tournament from '../contracts/data/Tournament';

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

interface CreateTournamentCommand {
    name: string,
    tables: number,
    points: number,
    pointsDrawn: number,
    drawn: boolean,
    sets: number,
    walkover: boolean,
    competitorsIds: string[]
}

interface TournamentStockQueryResult {
    tournaments: Tournament[];
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

        return newPerson;
    }
    );
}

export const savePersons = async (person: Person) => {
    const command: StorePersonCommand = { id: person.id, firstName: person.firstName, lastName: person.lastName };
    return await axios.post('/person', command, axiosConfig).then(response => {
        return response;
    });
}

export const createTournament = async (opitions: OptionsState, competitors: string[]) => {
    const command: CreateTournamentCommand = {
        name: opitions.tournamentName,
        tables: opitions.tables,
        points: opitions.points,
        pointsDrawn: opitions.pointsDrawn,
        drawn: opitions.drawn,
        sets: opitions.sets,
        walkover: opitions.walkover,
        competitorsIds: competitors
    };
    return await axios.post('/tournament', command, axiosConfig).then(response => {
        return response;
    });
}

export const getTournaments = async () => {
    return await axios.get<TournamentStockQueryResult>('/tournament/all').then(response => {
        return response.data.tournaments;
    });
}

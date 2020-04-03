import axios from 'axios';
import Person from '../contracts/data/Person';
import { OptionsState } from '../state/store/OptionsStore';
import { Tournament, SetResult, Round } from '../contracts/data/Tournament';
import TournamentInfo from '../contracts/data/TournamentInfo';

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
    tournaments: TournamentInfo[];
}

interface TournamentQueryResult {
    tournament: Tournament;
}

interface CreateRoundCommand {
    tournamentId: string,
}

interface TournamentRoundQueryResult {
    round: Round
}

interface MatchResultNotificationCommand {
    matchId: string,
    results: SetResult[];
}

interface MatchResetCommand {
    matchId: string,
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
    });
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

export const loadTournament = async (tournamentId: string) => {
    return await axios.get<TournamentQueryResult>('/tournament', {
        params: {
            tournamentId: tournamentId
        }
    }).then(response => {
        return response.data.tournament;
    });
}

export const createRound = async (tournamentId: string) => {
    const command: CreateRoundCommand = {
        tournamentId: tournamentId
    };
    return await axios.post('/tournament/round', command, axiosConfig).then(response => {
        return response;
    });
}

export const loadLastTournamentRound = async (tournamentId: string) => {
    return await axios.get<TournamentRoundQueryResult>('/tournament/round/last', {
        params: {
            tournamentId: tournamentId
        }
    }).then(response => {
        return response.data.round;
    });
}

export const saveMatchResult = async (matchId: string, setResults: SetResult[]) => {
    const command: MatchResultNotificationCommand = {
        matchId: matchId,
        results: setResults
    };
    return await axios.post('/tournament/match/result', command, axiosConfig).then(response => {
        return response;
    });
}

export const resetMatchResult = async (matchId: string) => {
    const command: MatchResetCommand = {
        matchId: matchId,
    };
    return await axios.post('/tournament/match/reset', command, axiosConfig).then(response => {
        return response;
    });
}
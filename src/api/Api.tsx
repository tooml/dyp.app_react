import axios from 'axios';
import { Person, PersonStats, PersonAvatar } from '../contracts/data/Person';
import { Tournament, SetResult, Round, RankingRow } from '../contracts/data/Tournament';
import TournamentInfo from '../contracts/data/TournamentInfo';
import { Competitor } from '../contracts/data/Competitor';
import Options from '../contracts/data/Options';

interface PersonStockQueryResult {
    persons: Person[];
}

interface PersonStatsQueryResult {
    tournaments: number;
    matches: number;
    wins: number;
    loose: number;
    drawn: number;
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
    avatar: string;
}

interface DeletePersonCommand {
    id: string;
}

interface PersonAvatarsQueryResult {
    avatars: PersonAvatar[]
}

interface CompetitorsQueryResult {
    competitors: Competitor[]
}

interface CreateTournamentCommand {
    name: string,
    tables: number,
    points: number,
    pointsDrawn: number,
    drawn: boolean,
    sets: number,
    fairLots: boolean,
    competitorsIds: string[]
}

interface DeleteTournamentCommand {
    id: string;
}

interface TournamentStockQueryResult {
    tournaments: TournamentInfo[]
}

interface TournamentQueryResult {
    tournament: Tournament
}

interface CreateRoundCommand {
    tournamentId: string
}

interface TournamentRoundQueryResult {
    round: Round
}

interface MatchResultNotificationCommand {
    matchId: string,
    results: SetResult[]
}

interface MatchResetCommand {
    matchId: string
}

interface TournamentRankingQueryResult {
    ranking: RankingRow[]
}

interface TournamentCompetitorsQueryResult {
    competitors: Competitor[]
}

interface ChangePlayersCommand {
    tournamentId: string,
    playerIds: string[]
}

interface ChangeOptionsCommand {
    tournamentId: string,
    tables: number;
    sets: number;
    points: number;
    pointsDrawn: number;
    drawn: boolean;
    fairLots: boolean;
}


axios.defaults.baseURL = 'http://localhost:5000/api/v1/';
//axios.defaults.baseURL = 'http://192.168.5.1:5000/api/v1/';
//axios.defaults.baseURL = 'http://192.168.178.26:8080/api/v1/';
//ionic build
//npx cap copy
//npx cap sync
//npx cap open android


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

export const getPersonStats = async (personId: string) => {
    return await axios.get<PersonStatsQueryResult>('/person/stats', {
        params: { personId: personId }
    }).then(response => {
        const stats: PersonStats = {
            tournaments: response.data.tournaments,
            matches: response.data.matches,
            wins: response.data.wins,
            loose: response.data.loose,
            drawn: response.data.drawn,
        };
        return stats;
    })
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

export const savePersons = async (person: Person, personAvatar: string) => {
    const command: StorePersonCommand = { 
        id: person.id, 
        firstName: 
        person.firstName, 
        lastName: person.lastName,
        avatar: personAvatar
    };

    return await axios.post('/person', command, axiosConfig).then(response => {
        return response;
    });
}

export const getPersonAvatars = async () => {
    return await axios.get<PersonAvatarsQueryResult>('person/all/avatar').then(response => {
        console.log(response);
        return response.data.avatars;
    });
}

export const deltePerson = async (id: string) => {
    const command: DeletePersonCommand = { id: id };
    return await axios.post('/person/delete', command, axiosConfig).then(response => {
        return response;
    });
}

export const getCompetitors = async () => {
    return await axios.get<CompetitorsQueryResult>('/competitors').then(response => {
        return response.data.competitors;
    });
}

export const createTournament = async (opitions: Options, competitors: string[]) => {
    const command: CreateTournamentCommand = {
        name: opitions.tournamentName,
        tables: opitions.tables,
        points: opitions.points,
        pointsDrawn: opitions.pointsDrawn,
        drawn: opitions.drawn,
        sets: opitions.sets,
        fairLots: opitions.fairLots,
        competitorsIds: competitors
    };
    return await axios.post('/tournament', command, axiosConfig).then(response => {
        return response;
    });
}

export const delteTournament = async (id: string) => {
    const command: DeleteTournamentCommand = { id: id };
    return await axios.post('/tournament/delete', command, axiosConfig).then(response => {
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
        params: { tournamentId: tournamentId }
    }).then(response => {
        return response.data.tournament;
    });
}

export const createRound = async (tournamentId: string) => {
    const command: CreateRoundCommand = { tournamentId: tournamentId };
    return await axios.post('/tournament/round', command, axiosConfig).then(response => {
        return response;
    });
}

export const loadLastTournamentRound = async (tournamentId: string) => {
    return await axios.get<TournamentRoundQueryResult>('/tournament/round/last', {
        params: { tournamentId: tournamentId }
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

export const getTournamentRanking = async (tournamentId: string) => {
    return await axios.get<TournamentRankingQueryResult>('/tournament/ranking', {
        params: { tournamentId: tournamentId }
    }).then(response => {
        return response.data.ranking;
    });
}

export const getTournamentCompetitors = async (tournamentId: string) => {
    return await axios.get<TournamentCompetitorsQueryResult>('/tournament/competitors', {
        params: { tournamentId: tournamentId }
    }).then(response =>{
        return response.data.competitors;
    });
}

export const saveTournamentCompetitors = async (tournamentId: string, competitorIds: string[]) => {
    const command: ChangePlayersCommand = {
        tournamentId: tournamentId,
        playerIds: competitorIds
    };
    return await axios.post('/tournament/players/change', command, axiosConfig).then(response => {
        return response;
    });
}

export const saveTournamentOptions = async (tournamentId: string, options: Options) => {
    const command: ChangeOptionsCommand = {
        tournamentId: tournamentId,
        tables: options.tables,
        sets: options.sets,
        points: options.points,
        pointsDrawn: options.pointsDrawn,
        drawn: options.drawn,
        fairLots: options.fairLots,
    };
    return await axios.post('/tournament/options/change', command, axiosConfig).then(response => {
        return response;
    });
}

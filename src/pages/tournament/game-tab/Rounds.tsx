import React from 'react';

import {
    IonContent,
    IonList,
    IonPage
} from '@ionic/react';

import { StoreState } from '../../../state/store/Store';
import { useSelector, useDispatch } from 'react-redux';

import { Tournament, Round, Match } from '../../../contracts/data/Tournament';
import MatchList from './round/MatchList';
import AddButton from '../../../components/buttons/AddButton';
import { newRound, selectMatch } from '../../../state/actions/TournamentAction';
import Header from '../../../components/Header';

const Rounds: React.FC = () => {
    const dispatch = useDispatch();
    const tournament: Tournament = useSelector((state: StoreState) => state.tournamentsState.tournament);
    const rounds = [...tournament.rounds].reverse();

    const _newRound = () => {
        dispatch(newRound(tournament.id));
    }
    
    return (
        <IonPage>
            <Header title={tournament.name} backButtonUrl='' />
            <IonContent>
                <IonList>
                    {rounds.length ?
                        rounds.map((round: Round) => {
                            return <MatchList key={round.id}
                                name={round.name}
                                matches={round.matches}
                                selectMatch={(match: Match) => dispatch(selectMatch(match))} />
                        }) : <p>Keine Einträge</p>}
                </IonList>
                <AddButton disabled={tournament.id.length === 0} onClick={() => _newRound()} />                
            </IonContent>            
        </IonPage>
    );
};

export default Rounds;

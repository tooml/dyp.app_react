import React from 'react';

import {
    IonContent,
    IonList,
    IonPage,
    IonToolbar,
    IonButtons,
    IonFooter
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

    const _newRound = () => {
        dispatch(newRound(tournament.id));
    }

    const onSelectMatch = (match: Match) => {
        dispatch(selectMatch(match));
    }

    return (
        <IonPage>
            <Header title={tournament.name} backButtonUrl='' />
            <IonContent>
                {/* {JSON.stringify(tournament)}  */}
                <IonList>
                    {tournament.rounds.length ?
                        tournament.rounds.map((round: Round) => {
                            return <MatchList key={round.id}
                                name={round.name}
                                matches={round.matches}
                                selectMatch={onSelectMatch} />
                        }) : <p>Keine Einträge</p>}
                </IonList>

                {/* <IonToolbar>
                    <IonButtons slot="end">
                        <AddButton disabled={tournament !== null} onClick={() => _newRound()} />
                    </IonButtons>

                </IonToolbar> */}

                {/* <div id="button-container">
                    <div id="end-button">
                        <AddButton disabled={tournament !== null} onClick={() => _newRound()} />
                    </div>
                </div> */}

                <AddButton disabled={tournament.id.length === 0} onClick={() => _newRound()} /> 
            </IonContent>
        </IonPage>
    );
};

export default Rounds;

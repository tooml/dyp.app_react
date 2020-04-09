import React, { useEffect } from 'react';

import Header from '../../../components/Header';
import TournamentsList from './TournamentsList';

import {  IonPage, IonContent } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../state/store/Store';
import { fetchTournaments, loadTournament } from '../../../state/actions/TournamentAction';
import { RouteComponentProps, withRouter } from 'react-router';

import TournamentInfo from '../../../contracts/data/TournamentInfo';

const Tournaments: React.FC<RouteComponentProps> = (props) => {

    const dispatch = useDispatch();
    const tournaments: TournamentInfo[] = useSelector((state: StoreState) => state.tournamentsState.tournamentsInfo);

    useEffect(() => {
        dispatch(fetchTournaments());
    }, [dispatch]);

    const _loadTournament = (tournamentId: string) => {
        dispatch(loadTournament(tournamentId));
        props.history.push('/tournament');
    }  
    
    return (
        <IonPage>
            <Header title='Turnier laden' backButtonUrl=''/>
            
            <IonContent>
                <TournamentsList tournaments={tournaments} loadTournament={_loadTournament} />
            </IonContent>
        </IonPage>
    );
};

export default withRouter(Tournaments);

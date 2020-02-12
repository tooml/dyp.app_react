import React, { useEffect } from 'react';

import Header from '../../../layout/page-header/Header';
import TournamentsList from './TournamentsList';

import {  IonPage, IonContent } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../state/store/Store';
import { fetchTournaments } from '../../../state/actions/TournamentAction';

import Tournament from '../../../contracts/data/Tournament';

const Tournaments: React.FC = () => {

    const dispatch = useDispatch();
    const tournaments: Tournament[] = useSelector((state: StoreState) => state.tournamentsState.tournaments);

    useEffect(() => {
        dispatch(fetchTournaments());
    }, [tournaments.length, dispatch]);
    
    return (
        <IonPage>
            <Header title='Turnier laden' />
            
            <IonContent>
                <TournamentsList tournaments={tournaments} />
            </IonContent>
        </IonPage>
    );
};

export default Tournaments;

import React, { useEffect } from 'react';

import {
    IonContent,
    IonPage,
    IonGrid,
    IonRefresher
} from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';

import { StoreState } from '../../../state/store/Store';
import { useSelector, useDispatch } from 'react-redux';

import { RankingRow } from '../../../contracts/data/Tournament';

import { fetchTournamentRanking } from '../../../state/actions/TournamentAction';
import Header from '../../../components/Header';
import RankingRowItem from './RankingRowItem';
import RankingRowHeaderItem from './RankingRowHeaderItem';
import './Ranking.scss'

const Ranking: React.FC = () => {

    const dispatch = useDispatch();
    const tournamentId: string = useSelector((state: StoreState) => state.tournamentsState.tournament.id);
    const tournamentName: string = useSelector((state: StoreState) => state.tournamentsState.tournament.name);
    const ranking: RankingRow[] = useSelector((state: StoreState) => state.tournamentsState.ranking);

    useEffect(() => {
        dispatch(fetchTournamentRanking(tournamentId));
    }, [dispatch, tournamentId]);

    const reload = (event: CustomEvent<RefresherEventDetail>) => {
        dispatch(fetchTournamentRanking(tournamentId));
        event.detail.complete();
    }

    return (
        <IonPage>
            <Header title={tournamentName} backButtonUrl='' />
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={reload} />
                <IonGrid className="grid">
                    <RankingRowHeaderItem />
                    {ranking.length ?
                        ranking.map((row: RankingRow, index: number) => {
                            return <RankingRowItem key={index} row={row} />
                        }) : <p>Keine Einträge {ranking.length}</p>}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Ranking;

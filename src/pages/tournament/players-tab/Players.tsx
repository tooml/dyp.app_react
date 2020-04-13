import React, { useEffect } from 'react';

import {
    IonContent,
    IonPage
} from '@ionic/react';

import { StoreState } from '../../../state/store/Store';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../components/Header';
import CompetitorsList from '../../../components/CompetitorsList';
import AcceptButton from '../../../components/buttons/AcceptButton';
import { Competitor } from '../../../contracts/data/Competitor';
import { toggleCompetitor, fetchTournamentCompetitors, saveTournamentCompetitors } from '../../../state/actions/CompetitorActions';
import { RouteComponentProps } from 'react-router';

const Players: React.FC<RouteComponentProps> = (props) => {

    const dispatch = useDispatch();
    const tournamentId: string = useSelector((state: StoreState) => state.tournamentsState.tournament.id);
    const tournamentName: string = useSelector((state: StoreState) => state.tournamentsState.tournament.name);
    const competitors: Competitor[] = useSelector((state: StoreState) => state.competitorsState.competitors);

    //Wird leider immer ausgeführt
    useEffect(() => {
        dispatch(fetchTournamentCompetitors(tournamentId));
    }, [props, competitors.length, tournamentId, dispatch]);

    const _toggleCompetitor = (competitor: Competitor) => {
        dispatch(toggleCompetitor(competitor));
    }

    const save = () => {
        const ids = competitors.filter(competitor => competitor.compete).map(x => x.id);
        dispatch(saveTournamentCompetitors(tournamentId, ids));
    }

    return (
        <IonPage>
            <Header title={tournamentName} backButtonUrl='' />
            <IonContent>
                <CompetitorsList competitors={competitors} onCompeteChange={_toggleCompetitor} />
                <AcceptButton disabled={competitors.filter(c => c.compete).length < 4} onClick={save} />
            </IonContent>
        </IonPage>
    );
};

export default Players;
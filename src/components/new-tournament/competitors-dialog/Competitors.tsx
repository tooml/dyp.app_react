import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../../../layout/page-header/Header';

import { IonContent, IonPage } from '@ionic/react';
import { StoreState } from '../../../state/store/Store';
import Competitor from '../../../contracts/data/Competitor';
import CompetitorsList from './CompetitorsList';
import { fetchCompetitors, toggleCompetitor, createNewTournament } from '../../../state/actions/CompetitorAction';
import AcceptButton from '../../../layout/accept-buttons/AcceptButton';
import { OptionsState } from '../../../state/store/OptionsStore';

const Competitors: React.FC = () => {

    const dispatch = useDispatch();
    const storeOptions: OptionsState = useSelector((state: StoreState) => state.optionsState);
    const competitors: Competitor[] = useSelector((state: StoreState) => state.competitorsState.competitors);
    const tooFewCompetitors: boolean = competitors.filter(c => c.compete).length < 2;
    

    useEffect(() => {
        dispatch(fetchCompetitors());
    }, [competitors.length, dispatch]);

    const toogleCompete = (personId: string) => {
        dispatch(toggleCompetitor(personId));
    }

    const createTournament = () => {
        const competitorIds: string[] = competitors.filter(x => x.compete).map(y => y.person.id);
        dispatch(createNewTournament(storeOptions, competitorIds));
    }

    return (
        <IonPage>
            <Header title='Teilnehmer' />
            <IonContent>
                <CompetitorsList competitors={competitors} onCompeteChange={toogleCompete} />
            </IonContent>

            <AcceptButton disabled={tooFewCompetitors} onClick={() => createTournament()} />
        </IonPage>
    );
};

export default Competitors;

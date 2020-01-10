import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../../layout/page-header/Header';

import { IonContent, IonPage } from '@ionic/react';
import { StoreState } from '../../../state/store/Store';
import Competitor from '../../../contracts/data/Competitor';
import CompetitorsList from './CompetitorsList';
import { fetchCompetitors, toggleCompetitor } from '../../../state/actions/CompetitorAction';
import AcceptButton from '../../../layout/accept-buttons/AcceptButton';

const Competitors: React.FC = () => {

    const dispatch = useDispatch();
    const competitors: Competitor[] = useSelector((state: StoreState) => state.competitorsState.competitors);
    const tooFewCompetitors: boolean = competitors.filter(c => c.compete).length < 2;

    useEffect(() => {
        dispatch(fetchCompetitors());
    }, [competitors.length, dispatch]);

    const toogleCompete = (personId: string) => {
        dispatch(toggleCompetitor(personId));
    }

    return (
        <IonPage>
            <Header title='Teilnehmer' />
            <IonContent>
                <CompetitorsList competitors={competitors} onCompeteChange={toogleCompete} />
            </IonContent>

            <AcceptButton disabled={tooFewCompetitors} onClick={() => console.log(competitors)} />
        </IonPage>
    );
};

export default Competitors;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../state/store/Store';
import { RouteComponentProps, withRouter } from 'react-router';

import useCompetitorSelection from '../../../hooks/CompetitorSelection'
import { fetchPersons } from '../../../state/actions/PersonActions';
import { createNewTournament } from '../../../state/actions/TournamentAction';
import { OptionsState } from '../../../state/store/OptionsStore';

import { IonContent, IonPage } from '@ionic/react';

import Header from '../../../components/Header';
import CompetitorsList from './CompetitorsList';
import AcceptButton from '../../../components/buttons/AcceptButton';
import Person from '../../../contracts/data/Person';

const Competitors: React.FC<RouteComponentProps> = (props) => {

    const dispatch = useDispatch();

    const storeOptions: OptionsState = useSelector((state: StoreState) => state.optionsState);
    const persons: Person[] = useSelector((state: StoreState) => state.personsState.persons);

    useEffect(() => {
        dispatch(fetchPersons());
    }, [persons.length, dispatch]);

    const { competitors, toggleCompetitor, countCompetitors } = useCompetitorSelection(persons);

    const createTournament = () => {
        const personIds = competitors.filter(competitor => competitor.compete).map(competitor => competitor.personId);
        dispatch(createNewTournament(storeOptions, personIds));
        props.history.push('/load');
    }

    return (
        <IonPage>
            <Header title='Teilnehmer' backButtonUrl='/new/options' />
            <IonContent>
                <CompetitorsList competitors={competitors} onCompeteChange={toggleCompetitor} />
                <AcceptButton disabled={countCompetitors < 4} onClick={createTournament} />
            </IonContent>
        </IonPage>
    );
};

export default withRouter(Competitors);

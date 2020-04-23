import React, { useEffect } from 'react';

import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersons, selectPerson, newPerson, deletePerson } from '../../../state/actions/PersonActions';
import { Person } from '../../../contracts/data/Person';
import { StoreState } from '../../../state/store/Store';

import { IonContent, IonPage, IonRefresher } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';

import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import PersonsList from './PersonsList';
import AddButton from '../../../components/buttons/AddButton';

const Persons: React.FC<RouteComponentProps> = (props) => {
// https://ionicframework.com/docs/react/your-first-app/2-taking-photos
    const dispatch = useDispatch();
    const persons: Person[] = useSelector((state: StoreState) => state.personsState.persons);

    const onNewPerson = () => {
        dispatch(newPerson());
        props.history.push('/edit/person');
    }

    const onSelectPerson = (person: Person) => {
        dispatch(selectPerson(person));
    }

    const onDeltePerson = (person: Person) => {
        dispatch(deletePerson(person));
    }

    const reload = (event: CustomEvent<RefresherEventDetail>) =>{
        dispatch(fetchPersons());
        event.detail.complete();
    }
    
    useEffect(() => {
        dispatch(fetchPersons());
    }, [persons.length, dispatch]);

    return (
        <IonPage>
            <Header title='Persons' backButtonUrl='' />
            <IonContent>
                <Loading />
                <IonRefresher slot="fixed" onIonRefresh={reload} />
                <PersonsList persons={persons}
                    selectPerson={onSelectPerson}
                    deletePerson={onDeltePerson} />
                <AddButton onClick={onNewPerson} disabled={false} />
            </IonContent>
        </IonPage>
    );
};

export default Persons;

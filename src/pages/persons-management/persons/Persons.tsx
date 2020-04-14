import React, { useEffect } from 'react';

import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersons, selectPerson, newPerson, deletePerson } from '../../../state/actions/PersonActions';
import Person from '../../../contracts/data/Person';
import { StoreState } from '../../../state/store/Store';

import { IonContent, IonPage } from '@ionic/react';

import Header from '../../../components/Header';
import PersonsList from './PersonsList';
import AddButton from '../../../components/buttons/AddButton';

const Persons: React.FC<RouteComponentProps> = (props) => {

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

    useEffect(() => {
        dispatch(fetchPersons());
    }, [persons.length, dispatch]);

    return (
        <IonPage>
            <Header title='Persons' backButtonUrl='' />
            <IonContent>
                <PersonsList persons={persons}
                    selectPerson={onSelectPerson}
                    deletePerson={onDeltePerson} />
                <AddButton onClick={onNewPerson} disabled={false} />
            </IonContent>
        </IonPage>
    );
};

export default Persons;

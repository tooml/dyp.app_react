import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPersons, selectPerson, newPerson } from '../../../state/actions/PersonActions';
import Person from '../../../contracts/data/Person';
import { StoreState } from '../../../state/store/Store';

import { Header } from '../../../layout/page-header/Header';
import PersonsList from './PersonsList';
import AddPerson from './AddPerson';

import { IonContent, IonPage } from '@ionic/react';


const Persons: React.FC = () => {

    const dispatch = useDispatch();
    const persons: Person[] = useSelector((state: StoreState) => state.personsState.persons);
    
    const onNewPerson = () => {
        dispatch(newPerson());
    }  

    const onSelectPerson = (person: Person) => {
        dispatch(selectPerson(person));
    }  

    useEffect(() => {
        dispatch(fetchPersons());
      }, [persons.length, dispatch]);

    return (
        <IonPage>
         <Header title='Persons' />
            <IonContent>
                <PersonsList persons={persons} selectPerson={onSelectPerson} />
            </IonContent>
            <AddPerson newPerson={onNewPerson}/>

        </IonPage>
    );
};

export default Persons;

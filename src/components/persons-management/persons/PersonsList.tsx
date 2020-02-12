import React from 'react';

import Person from '../../../contracts/data/Person';
import PersonListItem from './PersonListItem';

import { IonContent, IonList } from '@ionic/react';

interface PersonListProps {
    persons: Person[]
    selectPerson: Function
}

const PersonsList: React.FC<PersonListProps> = (props) => {
    return (
        <IonContent>
            {/* {JSON.stringify(persons)} */}
            <IonList lines="none">
                {props.persons.length ?
                    props.persons.map((person: Person) => {
                        return <PersonListItem key={person.id}
                            person={person}
                            selectPerson={props.selectPerson}
                        />
                    }) : <p>Keine Einträge {props.persons.length}</p>}
            </IonList>
        </IonContent>
    );
};

export default PersonsList;

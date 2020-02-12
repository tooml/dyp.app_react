import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Person from '../../../contracts/data/Person';

import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { contact } from 'ionicons/icons';

interface PersonProps extends RouteComponentProps {
    person: Person,
    selectPerson: Function
}

const PersonCard: React.FC<PersonProps> = (props) => {
    return (
        <IonItem routerLink={'/edit/person'} button={true} onClick={() => props.selectPerson(props.person)}>
            <IonIcon slot="start" size="large" color="medium" icon={contact} />
            <IonLabel>
                <h3>{props.person.firstName} , {props.person.lastName}</h3>
            </IonLabel>
        </IonItem>
    );
};

export default withRouter(PersonCard);

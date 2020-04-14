import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Person from '../../../contracts/data/Person';
import SlidingResetButton from '../../../components/buttons/SlidingResetButton';

import { IonItem, IonLabel, IonIcon, IonItemSliding } from '@ionic/react';
import { personOutline } from 'ionicons/icons';

interface PersonProps extends RouteComponentProps {
    person: Person,
    selectPerson: Function,
    deletePerson: Function
}

const PersonListItem: React.FC<PersonProps> = (props) => {
    return (
        <IonItemSliding >

            <IonItem routerLink={'/edit/person'} button={true} onClick={() => props.selectPerson(props.person)}>
                <IonIcon slot="start" size="large" color="medium" icon={personOutline} />
                <IonLabel>
                    <h3>{props.person.firstName} , {props.person.lastName}</h3>
                </IonLabel>
            </IonItem>

            <SlidingResetButton onClick={() => props.deletePerson(props.person)} disabled={false} />
        </IonItemSliding>
    );
};

export default withRouter(PersonListItem);

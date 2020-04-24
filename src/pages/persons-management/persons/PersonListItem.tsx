import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Person } from '../../../contracts/data/Person';
import SlidingResetButton from '../../../components/buttons/SlidingResetButton';

import { IonItem, IonLabel, IonItemSliding } from '@ionic/react';
import Avatar from '../../../components/Avatar';

interface PersonProps extends RouteComponentProps {
    person: Person,
    selectPerson: Function,
    deletePerson: Function
}

const PersonListItem: React.FC<PersonProps> = (props) => {
    return (
        <IonItemSliding >

            <IonItem detail={false} routerLink={'/edit/person'} button={true} onClick={() => props.selectPerson(props.person)}>
                <Avatar personId={props.person.id} avatarSrc={''} size='medium' />
                <IonLabel>
                    <h3>{props.person.firstName} , {props.person.lastName}</h3>
                </IonLabel>
            </IonItem>

            <SlidingResetButton onClick={() => props.deletePerson(props.person)} disabled={false} />
        </IonItemSliding>
    );
};

export default withRouter(PersonListItem);

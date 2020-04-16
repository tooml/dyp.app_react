import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Person, PersonStats } from '../../../contracts/data/Person';
import { savePerson } from '../../../state/actions/PersonActions';
import { StoreState } from '../../../state/store/Store';

import {
    IonPage, IonContent, IonCard,
    IonCardHeader, IonGrid,
    IonRow, IonCol, IonItem,
    IonLabel, IonInput, IonAvatar, IonIcon
} from '@ionic/react';

import SubmitButton from '../../../components/buttons/SubmitButton';
import Header from '../../../components/Header';
import { person } from 'ionicons/icons';

const PersonEdit: React.FC = () => {

    const dispatch = useDispatch();
    const person: Person = useSelector((state: StoreState) => state.personsState.person);
    const personStats: PersonStats = useSelector((state: StoreState) => state.personsState.personStats);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = (event: any) => {
        event.preventDefault();
        const editedPerson: Person = { id: person.id, firstName: firstName, lastName: lastName }
        dispatch(savePerson(editedPerson));
    }

    useEffect(() => {
        setFirstName(person.firstName);
        setLastName(person.lastName);
    }, [person, dispatch]);


    return (
        <IonPage>
            <Header title='Edit person' backButtonUrl='/persons' />

            <IonContent>
                <form onSubmit={onSubmit}>
                    <IonCard>
                        <IonCardHeader>
                            <IonAvatar>
                                <IonIcon slot="start" size="large" icon="person" />
                            </IonAvatar>
                        </IonCardHeader>

                        <IonGrid>
                            <IonRow>
                                <IonCol size="6">
                                    <IonItem lines="none">
                                        <IonLabel>First name:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="6">
                                    <IonItem>
                                        <IonInput value={firstName} onInput={e => setFirstName((e.target as HTMLInputElement).value)}
                                            name="firstName" type="text" placeholder="Vorname"
                                            maxlength={15} minlength={3} required={true} />
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="6">
                                    <IonItem lines="none">
                                        <IonLabel>Last name:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="6">
                                    <IonItem>
                                        <IonInput value={lastName} onInput={e => setLastName((e.target as HTMLInputElement).value)}
                                            name="lastName" type="text" placeholder="Nachname"
                                            maxlength={10} minlength={3} />
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="6">
                                    <IonItem lines="none">
                                        <IonLabel>Tournaments:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="6">
                                    <IonItem>
                                        <IonLabel>{personStats.tournaments}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="6">
                                    <IonItem lines="none">
                                        <IonLabel>Played matches:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="6">
                                    <IonItem>
                                        <IonLabel>{personStats.matches}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="6">
                                    <IonItem lines="none">
                                        <IonLabel>Wins:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="6">
                                    <IonItem>
                                        <IonLabel>{personStats.wins}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="6">
                                    <IonItem lines="none">
                                        <IonLabel>Drawn:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="6">
                                    <IonItem>
                                        <IonLabel>{personStats.drawn}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="6">
                                    <IonItem lines="none">
                                        <IonLabel>Loose:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="6">
                                    <IonItem>
                                        <IonLabel>{personStats.loose}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                        </IonGrid>
                    </IonCard>
                    <SubmitButton />
                </form>
            </IonContent>
        </IonPage>
    );
};

export default PersonEdit;

import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Person, StoreState } from '../../../state/store/PersonStore';

import { Header } from '../../../layout/page-header/Header';

import {
    IonPage, IonContent, IonCard,
    IonCardTitle, IonCardHeader, IonGrid,
    IonRow, IonCol, IonItem,
    IonLabel, IonInput, IonIcon, IonButton
} from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { savePerson } from '../../../state/actions/ActionTypes';

const PersonEdit: React.FC = () => {

    const dispatch = useDispatch();
    const person: Person = useSelector((state: StoreState) => state.personsState.person);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const onSubmit = (event: any) => {
        event.preventDefault();
        const p: Person = { id: person.id, firstName: firstName, lastName: lastName }
        dispatch(savePerson(p));
    } 

    useEffect(() => {
        setFirstName(person.firstName);
        setLastName(person.lastName);
      }, [person, dispatch]);

  
    return (
        <IonPage>
            <Header title='Bearbeiten' />

            <IonContent>
                <form onSubmit={onSubmit}>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Bearbeiten Bild</IonCardTitle>
                        </IonCardHeader>

                        <IonGrid>
                            <IonRow>
                                <IonCol size="5">
                                    <IonItem lines="none">
                                        <IonLabel>Vorname:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="7">
                                    <IonItem>
                                        <IonInput value={firstName} onInput={e => setFirstName((e.target as HTMLInputElement).value)}
                                        name="firstName" type="text" placeholder="Vorname" 
                                                  maxlength={20} minlength={3} required={true} />
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="5">
                                    <IonItem lines="none">
                                        <IonLabel>Nachname:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="7">
                                    <IonItem>
                                        <IonInput value={lastName} onInput={e => setLastName((e.target as HTMLInputElement).value)}
                                                  name="lastName" type="text" placeholder="Nachname" 
                                                  maxlength={20} minlength={3} />
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="5">
                                    <IonItem lines="none">
                                        <IonLabel>Teilnahmen:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="7">
                                    <IonItem>
                                        <IonLabel>Teilnahmen</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="5">
                                    <IonItem lines="none">
                                        <IonLabel>Spiele:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="7">
                                    <IonItem>
                                        <IonLabel>Spiele</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="5">
                                    <IonItem lines="none">
                                        <IonLabel>Verloren:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="7">
                                    <IonItem>
                                        <IonLabel>Verloren</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="5">
                                    <IonItem lines="none">
                                        <IonLabel>Gewonnen:</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="7">
                                    <IonItem>
                                        <IonLabel>Gewonnen</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonCard>

                    <IonGrid>
                        <IonRow>
                            <IonCol size="9" />
                            <IonCol size="3">
                                <IonButton type="submit" shape="round">
                                    <IonIcon slot="icon-only" icon={checkmark} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
        </IonPage>
    );

};

export default PersonEdit;

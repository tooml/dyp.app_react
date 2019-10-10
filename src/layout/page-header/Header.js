import React from 'react';
import { IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle } from '@ionic/react';

export const Header = ({ title }) => 
    (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );

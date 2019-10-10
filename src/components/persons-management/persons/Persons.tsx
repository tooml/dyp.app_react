import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import PersonsList from './PersonsList';
import { Header } from '../../../layout/page-header/Header';

const Persons: React.FC = () => {
    return (
        <IonPage>
         <Header title='Persons' />
            <IonContent>
                <PersonsList />
            </IonContent>
        </IonPage>
    );
};

export default Persons;
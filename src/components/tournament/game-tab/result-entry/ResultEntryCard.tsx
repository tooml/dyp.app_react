import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
    IonContent, IonCard,
    IonCardContent, IonPage, IonToolbar,
    IonTitle, IonButtons, IonHeader, IonBackButton, IonCardHeader
} from '@ionic/react';

import ResultSelection from './ResultSelection';
import ResultEntryHeader from './ResultEntryHeader';

interface ResultEntryCardProps extends RouteComponentProps {
    show: boolean;
    closeAction: Function;
}

const ResultEntryCard: React.FC<ResultEntryCardProps> = (props) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tournament/game" />
                    </IonButtons>
                    <IonTitle>Result Entry</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCardHeader>
                    <ResultEntryHeader home="home" away="away" />
                </IonCardHeader>

                <IonCardContent>
                    <ResultSelection home="home" away="away"/>
                    <ResultSelection home="home" away="away"/>
                    <ResultSelection home="home" away="away"/>
                </IonCardContent>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(ResultEntryCard);

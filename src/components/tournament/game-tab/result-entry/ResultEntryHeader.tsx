import React from 'react';

import {
    IonGrid, IonRow, IonCol, IonLabel
} from '@ionic/react';

interface ResultEntryHeaderProps {
    home: string;
    away: string;
}

const ResultEntryHeader: React.FC<ResultEntryHeaderProps> = (props) => {
    return (
        <IonGrid>
            <IonRow class="ion-align-items-center">
                <IonCol class="ion-text-center" size="12">
                    <IonLabel>{props.home}</IonLabel>
                </IonCol>
            </IonRow>
            <IonRow class="ion-align-items-center">
                <IonCol class="ion-text-center" size="12">vs</IonCol>
            </IonRow>
            <IonRow class="ion-align-items-center">
                <IonCol class="ion-text-center" size="12">
                    <IonLabel>{props.away}</IonLabel>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ResultEntryHeader;

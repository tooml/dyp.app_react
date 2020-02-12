import React from 'react';

import {
    IonSegment, IonSegmentButton, IonLabel, IonItem
} from '@ionic/react';

interface ResultSelectionProps {
    home: string;
    away: string;
}

const ResultSelection: React.FC<ResultSelectionProps> = (props) => {
    return (
        <IonItem>
            <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                <IonSegmentButton value="Home">
                    <IonLabel>{props.home}</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Tied">
                    <IonLabel>Tied</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Away">
                    <IonLabel>{props.away}</IonLabel>
                </IonSegmentButton>
            </IonSegment>
        </IonItem>
    );
};

export default ResultSelection;

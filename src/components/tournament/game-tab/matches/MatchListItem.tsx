import React from 'react';

import {
    IonLabel,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonButton
} from '@ionic/react';

interface FixtureItemProps {
    id: number;
}

const MatchListItem: React.FC<FixtureItemProps> = (props) => {

    // const [showResultEntry, setShowResultEntry] = useState(false);
    const id: number = 1;
    return (
        
        <IonItem slot="start">
            <IonGrid>
                <IonRow class="ion-align-items-center">
                    <IonCol class="ion-text-center" size="4">
                        <IonLabel>Home</IonLabel>
                    </IonCol>
                    <IonCol class="ion-text-center" size="4">
                        <IonButton  routerLink={'/tournament/game/edit'} key={id} >0 : 0</IonButton> 
                    </IonCol>
                    <IonCol class="ion-text-center" size="4">
                        <IonLabel>Away</IonLabel>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonItem>
    );
};

export default MatchListItem;

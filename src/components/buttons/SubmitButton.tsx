import React from 'react';

import { IonIcon, IonButton, IonFab } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';

const SubmitButton: React.FC = () => {

    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonButton className="ion-button" type="submit" size="small" >
                <IonIcon slot="icon-only" icon={checkmarkOutline} />
            </IonButton>
        </IonFab>
    );
};

export default SubmitButton;

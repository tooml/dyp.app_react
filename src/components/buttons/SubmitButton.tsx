import React from 'react';

import { IonIcon, IonButton, IonFab } from '@ionic/react';
import { checkmark } from 'ionicons/icons';

const SubmitButton: React.FC = () => {

    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonButton className="ion-button" type="submit" >
                <IonIcon slot="icon-only" icon={checkmark} />
            </IonButton>
        </IonFab>
    );
};

export default SubmitButton;

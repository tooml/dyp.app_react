import React from 'react';

import { IonRow, IonCol, IonIcon, IonButton } from '@ionic/react';
import { checkmark } from 'ionicons/icons';

const AcceptButton: React.FC = () => {

    return (
        <IonRow>
            <IonCol size="9" />
            <IonCol size="3">
                <IonButton type="submit" shape="round">
                    <IonIcon slot="icon-only" icon={checkmark} />
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default AcceptButton;
import React from 'react';

import { IonIcon, IonFab, IonButton } from '@ionic/react';
import { checkmark } from 'ionicons/icons';

export interface AcceptButtonProps {
    onClick: () => void,
    disabled: boolean
}

const AcceptButton: React.FC<AcceptButtonProps> = (props) => {

    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonButton className="ion-button" type="button" color="primary" disabled={props.disabled} onClick={event => props.onClick()}>
                <IonIcon icon={checkmark} />
            </IonButton>
        </IonFab>
    );
};

export default AcceptButton;

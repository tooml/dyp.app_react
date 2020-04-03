import React from 'react';

import { IonIcon, IonFab, IonButton } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';

export interface AcceptButtonProps {
    onClick: () => void,
    disabled: boolean
}

const AcceptButton: React.FC<AcceptButtonProps> = (props) => {

    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonButton className="ion-button" type="button" color="primary" size="small" disabled={props.disabled} onClick={event => props.onClick()}>
                <IonIcon icon={checkmarkOutline} />
            </IonButton>
        </IonFab>
    );
};

export default AcceptButton;

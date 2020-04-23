import React from 'react';

import { IonIcon, IonFab, IonButton } from '@ionic/react';
import { camera } from 'ionicons/icons';

export interface CameraButtonProps {
    onClick: () => void,
    disabled: boolean
}

const CameraButton: React.FC<CameraButtonProps> = (props) => {

    return (
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
            <IonButton className="ion-button" type="button" color="primary" disabled={props.disabled} onClick={event => props.onClick()}>
                <IonIcon icon={camera} />
            </IonButton>
        </IonFab>
    );
};

export default CameraButton;

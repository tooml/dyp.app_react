import React from 'react';

import { IonIcon, IonFab, IonButton } from '@ionic/react';
import { add } from 'ionicons/icons';

export interface AddButtonProps {
    onClick: () => void,
    disabled: boolean
}

const AddButton: React.FC<AddButtonProps> = (props) => {
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonButton className="ion-button" type="button" color="primary" disabled={props.disabled} onClick={event => props.onClick()}>
                <IonIcon icon={add} />
            </IonButton>
        </IonFab>
    );
};

export default AddButton;

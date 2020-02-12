import React from 'react';

import { IonRow, IonCol, IonIcon, IonButton } from '@ionic/react';
import { checkmark } from 'ionicons/icons';

export interface AcceptButtonProps {
    onClick: () => void,
    disabled: boolean
}

const AcceptButton: React.FC<AcceptButtonProps> = (props) => {

    return (
        <IonRow>
            <IonCol size="9" />
            <IonCol size="3">
                <IonButton type="button" shape="round" disabled={props.disabled} onClick={event => props.onClick()}>
                    <IonIcon slot="icon-only" icon={'checkmark'} />
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default AcceptButton;

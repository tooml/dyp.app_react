import React from 'react';

import { IonIcon, IonButton } from '@ionic/react';
import { trash } from 'ionicons/icons';

export interface ResetButtonProps {
    onClick: () => void,
    disabled: boolean
}

const ResetButton: React.FC<ResetButtonProps> = (props) => {

    return (
        <IonButton type="button" expand="block"
                   shape="round"
                   color="danger"
                   disabled={props.disabled} onClick={event => props.onClick()}>
            <IonIcon slot="icon-only" icon={trash} />
        </IonButton>
    );
};

export default ResetButton;

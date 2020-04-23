import React from 'react';

import { IonIcon, IonItemOptions, IonItemOption } from '@ionic/react';
import { trash } from 'ionicons/icons';

export interface ResetButtonProps {
    onClick: () => void,
    disabled: boolean
}

const SlidingResetButton: React.FC<ResetButtonProps> = (props) => {
    return (
        <IonItemOptions side="end">
            <IonItemOption color="danger" onClick={() => props.onClick()}>
                <IonIcon slot="icon-only" icon={trash} />
            </IonItemOption>
        </IonItemOptions>
    );
};

export default SlidingResetButton;

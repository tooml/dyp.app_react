import React from 'react';

import {
    IonLabel, IonListHeader
} from '@ionic/react';

interface RoundHeaderProps {
    name: string
}

const RoundHeader: React.FC<RoundHeaderProps> = (props) => {
    return (
        <IonListHeader>
            <IonLabel>{props.name}</IonLabel>
        </IonListHeader>
    );
};

export default RoundHeader;

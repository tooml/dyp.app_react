import React from 'react';

import {
    IonLabel,
    IonItem,
    IonIcon
} from '@ionic/react';
import { trophy } from 'ionicons/icons';

import Tournament from '../../../contracts/data/Tournament';

export interface TournamentItemProps {
    tournament: Tournament
}

const TournamentItem: React.FC<TournamentItemProps> = (props) => {
    return (
        <IonItem button={true} onClick={() => {}}>
            <IonIcon slot="start" size="large" color="medium" icon={trophy} />
            <IonLabel>
                <h3>{props.tournament.name} {props.tournament.created}</h3>
            </IonLabel>
        </IonItem>
    );
};

export default TournamentItem;

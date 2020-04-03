import React from 'react';

import {
    IonLabel,
    IonItem,
    IonIcon
} from '@ionic/react';
import { trophy } from 'ionicons/icons';

import TournamentInfo from '../../../contracts/data/TournamentInfo';

export interface TournamentItemProps {
    tournament: TournamentInfo,
    loadTournament: Function
}

const TournamentItem: React.FC<TournamentItemProps> = (props) => {
    return (
        <IonItem button={true} onClick={() => props.loadTournament(props.tournament.id)}>
            <IonIcon slot="start" size="large" color="medium" icon={trophy} />
            <IonLabel>
                <h3>{props.tournament.name} {props.tournament.created}</h3>
            </IonLabel>
        </IonItem>
    );
};

export default TournamentItem;

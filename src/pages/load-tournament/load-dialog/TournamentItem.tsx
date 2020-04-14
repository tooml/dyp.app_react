import React from 'react';

import {
    IonLabel,
    IonItem,
    IonIcon,
    IonItemSliding
} from '@ionic/react';
import { trophy } from 'ionicons/icons';

import TournamentInfo from '../../../contracts/data/TournamentInfo';
import SlidingResetButton from '../../../components/buttons/SlidingResetButton';

export interface TournamentItemProps {
    tournament: TournamentInfo,
    loadTournament: Function,
    deleteTournament: Function
}

const TournamentItem: React.FC<TournamentItemProps> = (props) => {
    return (
        <IonItemSliding>
            <IonItem button={true} onClick={() => props.loadTournament(props.tournament.id)}>
                <IonIcon slot="start" size="large" color="medium" icon={trophy} />
                <IonLabel>
                    <h3>{props.tournament.name} {props.tournament.created}</h3>
                </IonLabel>
            </IonItem>

            <SlidingResetButton onClick={() => props.deleteTournament(props.tournament)} disabled={false} />
        </IonItemSliding>
    );
};

export default TournamentItem;

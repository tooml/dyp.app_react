import React from 'react';

import {
    IonLabel,
    IonItem,
    IonIcon
} from '@ionic/react';
import { contact } from 'ionicons/icons';

import Competitor from '../../../contracts/data/Competitor';
import Toggle from '../options-dialog/Toggle';

export interface CompetitorListItemProps {
    competitor: Competitor,
    compete: boolean,
    onCompeteChange: (personId: string) => void;
}

const CompetitorListItem: React.FC<CompetitorListItemProps> = (props) => {
    return (
        <IonItem>
            <IonIcon slot="start" size="large" color="medium" icon={contact} />
            <IonLabel>
                <h3>{props.competitor.person.firstName} , {props.competitor.person.lastName}</h3>
            </IonLabel>
            <Toggle label={""} checked={props.compete} 
                    onChanged={() => props.onCompeteChange(props.competitor.person.id)} />
        </IonItem>
    );
};

export default CompetitorListItem;

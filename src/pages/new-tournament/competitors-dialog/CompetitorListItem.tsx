import React from 'react';

import {
    IonLabel,
    IonItem,
    IonIcon
} from '@ionic/react';

import Competitor from '../../../contracts/data/Competitor';
import Toggle from '../options-dialog/Toggle';

export interface CompetitorListItemProps {
    competitor: Competitor,
    onCompeteChange: (personId: string, value: boolean) => void;
}

const CompetitorListItem: React.FC<CompetitorListItemProps> = (props) => {
    return (
        <IonItem>
            <IonIcon slot="start" size="large" color="medium" icon={'contact'} />
            <IonLabel>
                <h3>{props.competitor.name}</h3>
            </IonLabel>
            <Toggle label={''} checked={props.competitor.compete} 
                    onChanged={(value: boolean) => props.onCompeteChange(props.competitor.personId, value)} />
        </IonItem>
    );
};

export default CompetitorListItem;

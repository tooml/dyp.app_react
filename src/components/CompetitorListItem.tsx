import React from 'react';

import {
    IonLabel,
    IonItem,
    IonIcon
} from '@ionic/react';

import { Competitor } from '../contracts/data/Competitor';
import Toggle from './Toggle';
import { person } from 'ionicons/icons';

export interface CompetitorListItemProps {
    competitor: Competitor,
    onCompeteChange: (competitor: Competitor) => void;
}

const CompetitorListItem: React.FC<CompetitorListItemProps> = (props) => {
    return (
        <IonItem>
            <IonIcon slot="start" size="large" icon={person} />
            <IonLabel>
                <h3>{props.competitor.name}</h3>
            </IonLabel>
            <Toggle label={''} checked={props.competitor.compete} 
                    onChanged={(value: boolean) => { 
                        const c: Competitor = { 
                            id: props.competitor.id, 
                            name: props.competitor.name, 
                            compete: value 
                        }
                        props.onCompeteChange(c); 
                        }} />
        </IonItem>
    );
};

export default CompetitorListItem;

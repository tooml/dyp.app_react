import React from 'react';

import {
    IonLabel,
    IonItem,
    IonIcon
} from '@ionic/react';

import { Competitor } from '../contracts/data/Competitor';
import Toggle from './Toggle';
import Avatar from './Avatar';

export interface CompetitorListItemProps {
    competitor: Competitor,
    onCompeteChange: (competitor: Competitor) => void;
}

const CompetitorListItem: React.FC<CompetitorListItemProps> = (props) => {
    return (
        <IonItem>
            <Avatar avatarSrc={props.competitor.image} size='medium' />
            <IonLabel>
                <h3>{props.competitor.name}</h3>
            </IonLabel>
            <Toggle label={''} checked={props.competitor.compete} 
                    onChanged={(value: boolean) => { 
                        const c: Competitor = { 
                            id: props.competitor.id, 
                            name: props.competitor.name, 
                            compete: value,
                            image: props.competitor.image
                        }
                        props.onCompeteChange(c); 
                        }} />
        </IonItem>
    );
};

export default CompetitorListItem;

import React from 'react';
import { IonContent, IonList } from '@ionic/react';

import { Competitor } from '../contracts/data/Competitor';
import CompetitorListItem from './CompetitorListItem';

interface CompetitorsListProps {
    competitors: Competitor[],
    onCompeteChange: (competitor: Competitor) => void;
}

const CompetitorsList: React.FC<CompetitorsListProps> = (props) => {
    return (
        <IonContent>
            <IonList lines="none">
                {props.competitors.length ?
                    props.competitors.map((competitor: Competitor) => {
                        return <CompetitorListItem key={competitor.id}
                            competitor={competitor}
                            onCompeteChange={props.onCompeteChange} />
                    }) : <p>Keine Einträge {props.competitors.length}</p>}
            </IonList>
        </IonContent>
    );
};

export default CompetitorsList;

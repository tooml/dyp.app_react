import React from 'react';

import {
    IonList,
    IonItem,
    IonCol,
    IonRow,
    IonGrid
} from '@ionic/react';

import MatchListItem from './MatchListItem';
import RoundHeader from './RoundHeader';

interface FixtureListProps {
    name: string,
    fixtures: number[]
}

const MatchList: React.FC = () => {

    const fixtures: number[] = [0];

    return (
        <IonItem>
            <IonGrid>
                <IonRow class="ion-text-center">
                    <IonCol size="12">
                        {/* {JSON.stringify(persons)} */}
                        <RoundHeader name={"Runde 1"} />
                        <IonList lines="none">
                            {fixtures.length ?
                                fixtures.map((x: number) => {
                                    return <MatchListItem key={x} id={x} />
                                }) : <p>Keine Einträge {fixtures.length}</p>}
                        </IonList>
                    </IonCol>
                </IonRow>
            </IonGrid>

        </IonItem>
    );
};

export default MatchList;

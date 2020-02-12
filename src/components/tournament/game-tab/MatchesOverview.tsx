import React from 'react';

import {
    IonContent,
    IonList,
    IonPage
} from '@ionic/react';

import FixtureList from './matches/MatchList';

const MatchesOverview: React.FC = () => {

    const fixtures: number[] = [0, 1, 2];

    return (
        <IonPage>
            <IonContent>
                {/* {JSON.stringify(persons)} */}
                <IonList>
                    {fixtures.length ?
                        fixtures.map((x: number) => {
                            return <FixtureList key={x} />
                        }) : <p>Keine Einträge {fixtures.length}</p>}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default MatchesOverview;

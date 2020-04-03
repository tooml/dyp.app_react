import React from 'react';

import {
    IonSegment, IonSegmentButton, IonLabel, IonItem
} from '@ionic/react';

import { SetResult, Team } from '../../../../contracts/data/Tournament';

interface ResultSelectionProps {
    set: number,
    home: Team;
    away: Team;
    result: SetResult;
    drawn: boolean;
    onSetResultChange: (set: number, result: SetResult) => void;
}

const ResultSelection: React.FC<ResultSelectionProps> = (props) => {

    const onChange = (value: string) => {
        const result = mapResult(value);
        props.onSetResultChange(props.set, result);
    }

    const mapResult = (result: string) => {
        if (result === '0') return SetResult.Home
        if (result === '1') return SetResult.Away
        if (result === '2') return SetResult.Drawn
        return SetResult.None
    }

    return (
        <IonItem>
            <IonSegment onIonChange={e => { onChange(String(e.detail.value)) }}
                value={props.result.toString()}>
                <IonSegmentButton value={SetResult.Home.toString()}>
                    <IonLabel>Home</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton disabled={!props.drawn} value={SetResult.Drawn.toString()}>
                    <IonLabel>Drawn</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value={SetResult.Away.toString()}>
                    <IonLabel>Away</IonLabel>
                </IonSegmentButton>
            </IonSegment>
        </IonItem>
    );
};

export default ResultSelection;

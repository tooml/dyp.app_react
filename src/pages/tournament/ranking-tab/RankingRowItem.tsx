import React from 'react';

import { IonRow, IonCol } from '@ionic/react';

import { RankingRow } from '../../../contracts/data/Tournament';
import './Ranking.scss'

interface RankingRowItemProps {
    row: RankingRow
}

const RankingRowItem: React.FC<RankingRowItemProps> = (props) => {
    return (
        <IonRow className="row ion-justify-content-center ion-text-center">
            <IonCol className="ion-align-self-center" size="0.5" >{props.row.rank}</IonCol>
            <IonCol className="ion-align-self-start ion-text-left" size="3" >{props.row.playerName}</IonCol>
            <IonCol className="ion-align-self-center" size="1" >{props.row.matches}</IonCol>
            <IonCol className="ion-align-self-center" size="2.5" >{props.row.w + '|' + props.row.d + '|' + props.row.l}</IonCol>
            <IonCol className="ion-align-self-center" size="1" >{props.row.points}</IonCol>
            <IonCol className="ion-align-self-center" size="2" >{props.row.q1}</IonCol>
            <IonCol className="ion-align-self-center" size="2" >{props.row.q2}</IonCol>
        </IonRow>
    );
};

export default RankingRowItem;

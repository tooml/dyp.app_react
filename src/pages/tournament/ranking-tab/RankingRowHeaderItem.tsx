import React from 'react';
import './Ranking.scss'
import { IonRow, IonCol } from '@ionic/react';

const RankingRowHeaderItem: React.FC = () => {
    return (
        <IonRow className=" row header ion-justify-content-center ion-text-center">
            <IonCol className="ion-align-self-center" size="0.5" >#</IonCol>
            <IonCol className="ion-align-self-center" size="3" >name</IonCol>
            <IonCol className="ion-align-self-center" size="1" >no.</IonCol>
            <IonCol className="ion-align-self-center" size="2.5" >w | d | l</IonCol>
            <IonCol className="ion-align-self-center" size="1" >pts.</IonCol>
            <IonCol className="ion-align-self-center" size="2" >q1</IonCol>
            <IonCol className="ion-align-self-center" size="2" >q2</IonCol>
        </IonRow>
    );
};

export default RankingRowHeaderItem;

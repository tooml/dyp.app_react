import React from "react";

import {
    IonGrid,
    IonRow,
    IonCol,
    IonLabel
} from "@ionic/react";

import './styles/OptionsBox.css';

export interface BoxProps {
    label: string
}

const OptionsBox: React.FC<BoxProps> = (props) => {
    return (
        <IonGrid>
            <IonRow className="grid-header">
                <IonLabel>{props.label}</IonLabel>
            </IonRow>
            <IonRow>
                <IonCol>
                    {props.children}
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default OptionsBox;

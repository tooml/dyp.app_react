import React from "react";

import {
    IonItem,
    IonLabel,
    IonToggle
} from "@ionic/react";

export interface ToggleOptionProps {
    label: string,
    checked: boolean,
    onChanged: (value: boolean) => void
}

const ToggleOption: React.FC<ToggleOptionProps> = (props) => {

    return (
        <IonItem>
            <IonLabel>{props.label}</IonLabel>
            <IonToggle checked={props.checked} onIonChange={e => props.onChanged((e.target as HTMLInputElement).checked)} />
        </IonItem>
    );
};

export default ToggleOption;

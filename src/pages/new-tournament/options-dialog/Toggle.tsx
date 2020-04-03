import React from "react";

import {
    IonItem,
    IonLabel,
    IonToggle
} from "@ionic/react";

export interface ToggleProps {
    label: string,
    checked: boolean,
    onChanged: (value: boolean) => void
}

const Toggle: React.FC<ToggleProps> = (props) => {

    return (
        <IonItem lines="none">
            <IonLabel>{props.label}</IonLabel>
            <IonToggle checked={props.checked} onIonChange={e => props.onChanged((e.target as HTMLInputElement).checked)} />
        </IonItem>
    );
};

export default Toggle;

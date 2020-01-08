import React from "react";

import './styles/SelectOption.css';

import {
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import Dictionary from "./contracts/Options";

export interface SelectOptionProps {
    label: string,
    options: Dictionary<string, string>[],
    selected: string,
    disabled: boolean,
    onChanged: (value: number) => void
}

const SelectOption: React.FC<SelectOptionProps> = (props) => {

    return (
        <IonItem>
            <IonLabel>{props.label}</IonLabel>
            <IonSelect placeholder="Select one" 
                disabled={props.disabled} 
                value={props.selected}
                onIonChange={e => props.onChanged((Number((e.target as HTMLSelectElement).value)))}>
                {props.options.map((option: Dictionary<string, string>) => {
                    return <IonSelectOption key={option.key}
                        value={option.key}
                    >{option.value}</IonSelectOption>
                })}
            </IonSelect>
        </IonItem>
    );
};

export default SelectOption;

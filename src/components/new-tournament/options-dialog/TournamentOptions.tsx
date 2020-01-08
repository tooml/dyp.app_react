import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
    IonContent,
    IonGrid,
    IonRow,
    IonPage
} from "@ionic/react";

import { Header } from "../../../layout/page-header/Header";
import OptionsBox from "./OptionsBox";
import SelectOption from "./SelectOption";
import ToggleOption from "./ToggleOption";
import { StoreState } from "../../../state/store/Store";
import {
    setTablesOption, setPointsOption, setPointsDrawnOption,
    setDrawnOption, setSetsOption, setWalkoverOption
} from "../../../state/actions/OptionsActions";
import { OptionsState } from "../../../state/store/OptionsStore";
import Dictionary, { optionsCreator } from "./contracts/Options";

export interface OptionDefenition {
    name: string
    type: string;
    values: string[],
}

const TournamentOptions: React.FC = () => {

    const dispatchStore = useDispatch();
    const storeOptions: OptionsState = useSelector((state: StoreState) => state.optionsState);

    const tableOptions: Dictionary<string, string>[] = optionsCreator("Tisch", "Tische");
    const pointOptions: Dictionary<string, string>[] = optionsCreator("Punkt", "Punkte");
    const setOptions: Dictionary<string, string>[] = optionsCreator("Satz", "Sätze");

    return (
        <IonPage>
            <Header title='Options' />
            <IonContent>
                {/* <p>{JSON.stringify(tableOptions)}</p> */}
                <IonGrid>
                    <IonRow>
                        <OptionsBox label={"Tables"}>
                            <SelectOption label={"Tables"}
                                options={tableOptions}
                                selected={String(storeOptions.tables)}
                                disabled={false}
                                onChanged={value => dispatchStore(setTablesOption(value))} />
                        </OptionsBox>
                        <OptionsBox label={"Points"}>
                            <SelectOption label={"Points"}
                                options={pointOptions}
                                selected={String(storeOptions.points)}
                                disabled={false}
                                onChanged={value => dispatchStore(setPointsOption(value))} />
                            <SelectOption label={"Points Drawn"}
                                options={pointOptions}
                                selected={String(storeOptions.pointsDrawn)}
                                disabled={!storeOptions.drawn}
                                onChanged={value => dispatchStore(setPointsDrawnOption(value))} />
                            <ToggleOption label={"Drawn"}
                                checked={storeOptions.drawn}
                                onChanged={value => dispatchStore(setDrawnOption(value))} />
                        </OptionsBox>
                        <OptionsBox label={"Gewinnsätze"}>
                            <SelectOption label={"Gewinnsätze"}
                                options={setOptions} 
                                selected={String(storeOptions.sets)}
                                disabled={false}
                                onChanged={value => dispatchStore(setSetsOption(value))} />
                        </OptionsBox>
                        <OptionsBox label={"Walkover"}>
                            <ToggleOption label={"Freiloswertung"}
                                checked={storeOptions.walkover}
                                onChanged={value => dispatchStore(setWalkoverOption(value))} />
                        </OptionsBox>
                    </IonRow>
                </IonGrid>
                {/* <button onClick={() => {console.log(storeOptions)}}>asdfasfd</button> */}
            </IonContent>          
        </IonPage>
    );
};

export default TournamentOptions;

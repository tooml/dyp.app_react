import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
    IonContent,
    IonPage,
    IonItemGroup,
    IonLabel,
    IonItemDivider
} from "@ionic/react";

import { Header } from "../../../layout/page-header/Header";
import Selection from "./Selection";
import Toggle from "./Toggle";
import { StoreState } from "../../../state/store/Store";
import {
    setTablesOption, setPointsOption, setPointsDrawnOption,
    setDrawnOption, setSetsOption, setWalkoverOption
} from "../../../state/actions/OptionsActions";
import { OptionsState } from "../../../state/store/OptionsStore";
import Dictionary, { optionsCreator } from "./contracts/Options";
import AcceptButton from "../../../layout/accept-buttons/AcceptButton";
import { RouteComponentProps, withRouter } from "react-router";

export interface OptionDefenition {
    name: string
    type: string;
    values: string[],
}

const TournamentOptions: React.FC<RouteComponentProps> = (props) => {

    const dispatchStore = useDispatch();
    const storeOptions: OptionsState = useSelector((state: StoreState) => state.optionsState);

    const tableOptions: Dictionary<string, string>[] = optionsCreator("Tisch", "Tische");
    const pointOptions: Dictionary<string, string>[] = optionsCreator("Punkt", "Punkte");
    const setOptions: Dictionary<string, string>[] = optionsCreator("Satz", "Sätze");

    const pushOptionsToStore = () => {
        props.history.push('/new/competitors');
    }

    return (
        <IonPage>
            <Header title='Optionen' />
            <IonContent>
                {/* <p>{JSON.stringify(tableOptions)}</p> */}
                <IonItemGroup>
                    <IonItemDivider>
                        <IonLabel>Tische</IonLabel>
                    </IonItemDivider>

                    <Selection label={"Tables"}
                        options={tableOptions}
                        selected={String(storeOptions.tables)}
                        disabled={false}
                        onChanged={value => dispatchStore(setTablesOption(value))} />
                </IonItemGroup>

                <IonItemGroup>
                    <IonItemDivider>
                        <IonLabel>Punkte</IonLabel>
                    </IonItemDivider>

                    <Selection label={"Points"}
                        options={pointOptions}
                        selected={String(storeOptions.points)}
                        disabled={false}
                        onChanged={value => dispatchStore(setPointsOption(value))} />

                    <Selection label={"Points Drawn"}
                        options={pointOptions}
                        selected={String(storeOptions.pointsDrawn)}
                        disabled={!storeOptions.drawn}
                        onChanged={value => dispatchStore(setPointsDrawnOption(value))} />

                    <Toggle label={"Drawn"}
                        checked={storeOptions.drawn}
                        onChanged={value => dispatchStore(setDrawnOption(value))} />
                </IonItemGroup>

                <IonItemGroup>
                    <IonItemDivider>
                        <IonLabel>Gewinnsätze</IonLabel>
                    </IonItemDivider>

                    <Selection label={"Gewinnsätze"}
                        options={setOptions}
                        selected={String(storeOptions.sets)}
                        disabled={false}
                        onChanged={value => dispatchStore(setSetsOption(value))} />
                </IonItemGroup>

                <IonItemGroup>
                    <IonItemDivider>
                        <IonLabel>Freilos</IonLabel>
                    </IonItemDivider>

                    <Toggle label={"Freiloswertung"}
                        checked={storeOptions.walkover}
                        onChanged={value => dispatchStore(setWalkoverOption(value))} />
                </IonItemGroup>   

                <AcceptButton disabled={false} onClick={() => pushOptionsToStore()} />
            </IonContent>
        </IonPage>
    );
};

export default withRouter(TournamentOptions);

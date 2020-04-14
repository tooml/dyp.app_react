import React from 'react';

import {
    IonContent,
    IonItemGroup,
    IonItemDivider,
    IonLabel
} from '@ionic/react';

import Options from '../contracts/data/Options';
import Selection from '../components/Selection';
import Toggle from '../components/Toggle';
import Dictionary, { optionsCreator } from '../contracts/OptionsSelection';

interface OptionsOverviewProps {
    options: Options,
    changeTables: (value: number) => void,
    changePoints: (value: number) => void,
    changePointsDrawn: (value: number) => void,
    changeDrawn: (value: boolean) => void,
    changeSets: (value: number) => void,
    setWalkover: (value: boolean) => void,
}

const OptionsOverview: React.FC<OptionsOverviewProps> = (props) => {

    const tableOptions: Dictionary<string, string>[] = optionsCreator('Tisch', 'Tische');
    const pointOptions: Dictionary<string, string>[] = optionsCreator('Punkt', 'Punkte');
    const setOptions: Dictionary<string, string>[] = optionsCreator('Satz', 'Sätze');

    return (
        <IonContent>
            {/* <p>{JSON.stringify(tableOptions)}</p> */}
            <IonItemGroup>
                <IonItemDivider>
                    <IonLabel>Tische</IonLabel>
                </IonItemDivider>

                <Selection label={'Tables'}
                    options={tableOptions}
                    selected={String(props.options.tables)}
                    disabled={false}
                    onChanged={value => props.changeTables(value)} />
            </IonItemGroup>

            <IonItemGroup>
                <IonItemDivider>
                    <IonLabel>Punkte</IonLabel>
                </IonItemDivider>

                <Selection label={'Points'}
                    options={pointOptions}
                    selected={String(props.options.points)}
                    disabled={false}
                    onChanged={value => props.changePoints(value)} />

                <Selection label={'Points Drawn'}
                    options={pointOptions}
                    selected={String(props.options.pointsDrawn)}
                    disabled={!props.options.drawn}
                    onChanged={value => props.changePointsDrawn(value)} />

                <Toggle label={'Drawn'}
                    checked={props.options.drawn}
                    onChanged={value => props.changeDrawn(value)} />
            </IonItemGroup>

            <IonItemGroup>
                <IonItemDivider>
                    <IonLabel>Gewinnsätze</IonLabel>
                </IonItemDivider>

                <Selection label={'Gewinnsätze'}
                    options={setOptions}
                    selected={String(props.options.sets)}
                    disabled={false}
                    onChanged={value => props.changeSets(value)} />
            </IonItemGroup>

            <IonItemGroup>
                <IonItemDivider>
                    <IonLabel>Freilos</IonLabel>
                </IonItemDivider>

                <Toggle label={'Freiloswertung'}
                    checked={props.options.walkover}
                    onChanged={value => props.setWalkover(value)} />
            </IonItemGroup>
        </IonContent>
    );
};

export default OptionsOverview;

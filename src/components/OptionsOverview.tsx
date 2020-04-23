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
    changeFairLots: (value: boolean) => void,
}

const OptionsOverview: React.FC<OptionsOverviewProps> = (props) => {

    const tableOptions: Dictionary<string, string>[] = optionsCreator('Tisch', 'Tische');
    const pointOptions: Dictionary<string, string>[] = optionsCreator('Punkt', 'Punkte');
    const setOptions: Dictionary<string, string>[] = optionsCreator('Satz', 'Sätze');

    return (
        <IonContent>
            <IonItemGroup>
                <IonItemDivider>
                    <IonLabel>Tables</IonLabel>
                </IonItemDivider>

                <Selection label={'Number of tables'}
                    options={tableOptions}
                    selected={String(props.options.tables)}
                    disabled={false}
                    onChanged={value => props.changeTables(value)} />
            </IonItemGroup>

            <IonItemGroup>
                <IonItemDivider>
                    <IonLabel>Points</IonLabel>
                </IonItemDivider>

                <Selection label={'Points per win'}
                    options={pointOptions}
                    selected={String(props.options.points)}
                    disabled={false}
                    onChanged={value => props.changePoints(value)} />

                <Selection label={'Points per drawn'}
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
                    <IonLabel>Winning sets</IonLabel>
                </IonItemDivider>

                <Selection label={'Winning sets'}
                    options={setOptions}
                    selected={String(props.options.sets)}
                    disabled={false}
                    onChanged={value => props.changeSets(value)} />
            </IonItemGroup>

            <IonItemGroup>
                <IonItemDivider>
                    <IonLabel>Fair draw</IonLabel>
                </IonItemDivider>

                <Toggle label={'Fair draw'}
                    checked={props.options.fairLots}
                    onChanged={value => props.changeFairLots(value)} />
            </IonItemGroup>
        </IonContent>
    );
};

export default OptionsOverview;

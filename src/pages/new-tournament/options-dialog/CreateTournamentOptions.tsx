import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { IonPage } from '@ionic/react';

import Header from '../../../components/Header';
import { StoreState } from '../../../state/store/Store';
import {
    setTablesOption, setPointsOption, setPointsDrawnOption,
    setDrawnOption, setSetsOption, setWalkoverOption
} from '../../../state/actions/OptionsActions';
import { RouteComponentProps, withRouter } from 'react-router';
import Options from '../../../contracts/data/Options';
import AcceptButton from '../../../components/buttons/AcceptButton';
import OptionsOverview from '../../../components/OptionsOverview';

export interface OptionDefenition {
    name: string
    type: string;
    values: string[],
}

const CreateTournamentOptions: React.FC<RouteComponentProps> = (props) => {

    const dispatch = useDispatch();
    const options: Options = useSelector((state: StoreState) => state.optionsState.options);

    const pushOptionsToStore = () => {
        props.history.push('/new/competitors');
    }

    return (
        <IonPage>
            <Header title='Optionen' backButtonUrl='/new' />

            <OptionsOverview
                options={options}
                changeTables={(value: number) => dispatch(setTablesOption(value))}
                changePoints={(value: number) => dispatch(setPointsOption(value))}
                changePointsDrawn={(value: number) => dispatch(setPointsDrawnOption(value))}
                changeDrawn={(value: boolean) => dispatch(setDrawnOption(value))}
                changeSets={(value: number) => dispatch(setSetsOption(value))}
                setWalkover={(value: boolean) => dispatch(setWalkoverOption(value))}
            />
            <AcceptButton disabled={false} onClick={pushOptionsToStore} />
            {/* <IonContent>
                <IonItemGroup>
                    <IonItemDivider>
                        <IonLabel>Tische</IonLabel>
                    </IonItemDivider>

                    <Selection label={'Tables'}
                        options={tableOptions}
                        selected={String(options.tables)}
                        disabled={false}
                        onChanged={value => dispatch(setTablesOption(value))} />
                </IonItemGroup>

                <IonItemGroup>
                    <IonItemDivider>
                        <IonLabel>Punkte</IonLabel>
                    </IonItemDivider>

                    <Selection label={'Points'}
                        options={pointOptions}
                        selected={String(options.points)}
                        disabled={false}
                        onChanged={value => dispatch(setPointsOption(value))} />

                    <Selection label={'Points Drawn'}
                        options={pointOptions}
                        selected={String(options.pointsDrawn)}
                        disabled={!options.drawn}
                        onChanged={value => dispatch(setPointsDrawnOption(value))} />

                    <Toggle label={'Drawn'}
                        checked={options.drawn}
                        onChanged={value => dispatch(setDrawnOption(value))} />
                </IonItemGroup>

                <IonItemGroup>
                    <IonItemDivider>
                        <IonLabel>Gewinnsätze</IonLabel>
                    </IonItemDivider>

                    <Selection label={'Gewinnsätze'}
                        options={setOptions}
                        selected={String(options.sets)}
                        disabled={false}
                        onChanged={value => dispatch(setSetsOption(value))} />
                </IonItemGroup>

                <IonItemGroup>
                    <IonItemDivider>
                        <IonLabel>Freilos</IonLabel>
                    </IonItemDivider>

                    <Toggle label={'Freiloswertung'}
                        checked={options.walkover}
                        onChanged={value => dispatch(setWalkoverOption(value))} />
                </IonItemGroup>

                <AcceptButton disabled={false} onClick={pushOptionsToStore} />
            </IonContent> */}
        </IonPage>
    );
};

export default withRouter(CreateTournamentOptions);

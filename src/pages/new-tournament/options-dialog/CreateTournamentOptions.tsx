import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { IonPage } from '@ionic/react';

import Header from '../../../components/Header';
import { StoreState } from '../../../state/store/Store';
import {
    setTablesOption, setPointsOption, setPointsDrawnOption,
    setDrawnOption, setSetsOption, setFairLotsOption
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
            <Header title='Options' backButtonUrl='/new' />

            <OptionsOverview
                options={options}
                changeTables={(value: number) => dispatch(setTablesOption(value))}
                changePoints={(value: number) => dispatch(setPointsOption(value))}
                changePointsDrawn={(value: number) => dispatch(setPointsDrawnOption(value))}
                changeDrawn={(value: boolean) => dispatch(setDrawnOption(value))}
                changeSets={(value: number) => dispatch(setSetsOption(value))}
                changeFairLots={(value: boolean) => dispatch(setFairLotsOption(value))}
            />
            <AcceptButton disabled={false} onClick={pushOptionsToStore} />
        </IonPage>
    );
};

export default withRouter(CreateTournamentOptions);

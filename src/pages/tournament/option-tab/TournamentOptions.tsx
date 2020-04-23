import React from 'react';

import {
    IonPage
} from '@ionic/react';

import { StoreState } from '../../../state/store/Store';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../components/Header';
import Options from '../../../contracts/data/Options';
import OptionsOverview from '../../../components/OptionsOverview';
import AcceptButton from '../../../components/buttons/AcceptButton';
import { setTournamentTablesOption, setTournamentPointsOption, 
        setTournamentPointsDrawnOption, setTournamentDrawnOption, 
        setTournamentSetsOption, setTournamentFairLotsOption, 
        changeTournamentOptions } from '../../../state/actions/TournamentAction';


const TournamentOptions: React.FC = () => {
    const dispatch = useDispatch();
    const tournamentId: string = useSelector((state: StoreState) => state.tournamentsState.tournament.id);
    const tournamentName: string = useSelector((state: StoreState) => state.tournamentsState.tournament.name);
    const tournamentOptions: Options = useSelector((state: StoreState) => state.tournamentsState.tournament.options);

    return (
        <IonPage>
            <Header title={tournamentName} backButtonUrl='' />

            <OptionsOverview
                options={tournamentOptions}
                changeTables={(value: number) => dispatch(setTournamentTablesOption(value))}
                changePoints={(value: number) => dispatch(setTournamentPointsOption(value))}
                changePointsDrawn={(value: number) => dispatch(setTournamentPointsDrawnOption(value))}
                changeDrawn={(value: boolean) => dispatch(setTournamentDrawnOption(value))}
                changeSets={(value: number) => dispatch(setTournamentSetsOption(value))}
                changeFairLots={(value: boolean) => dispatch(setTournamentFairLotsOption(value))}
            />
            <AcceptButton disabled={tournamentId.length === 0} onClick={() => dispatch(changeTournamentOptions(tournamentId, tournamentOptions))} />
        </IonPage>
    );
};

export default TournamentOptions;
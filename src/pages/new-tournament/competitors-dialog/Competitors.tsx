import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../state/store/Store';
import { RouteComponentProps, withRouter } from 'react-router';

import { toggleCompetitor, fetchInitialCompetitors } from '../../../state/actions/CompetitorActions';
import { createNewTournament } from '../../../state/actions/TournamentAction';
import { IonContent, IonPage } from '@ionic/react';

import Header from '../../../components/Header';
import CompetitorsList from '../../../components/CompetitorsList';
import AcceptButton from '../../../components/buttons/AcceptButton';
import { Competitor } from '../../../contracts/data/Competitor';
import Options from '../../../contracts/data/Options';

const Competitors: React.FC<RouteComponentProps> = (props) => {

    const dispatch = useDispatch();
    const options: Options = useSelector((state: StoreState) => state.optionsState.options);
    const competitors: Competitor[] = useSelector((state: StoreState) => state.competitorsState.competitors);

    useEffect(() => {
        dispatch(fetchInitialCompetitors());
    }, [competitors.length, dispatch]);

    const _toggleCompetitor = (competitor: Competitor) => {
        dispatch(toggleCompetitor(competitor));
    }

    const createTournament = () => {
        const personIds = competitors.filter(competitor => competitor.compete).map(competitor => competitor.id);
        dispatch(createNewTournament(options, personIds));
        props.history.push('/load');
    }

    return (
        <IonPage>
            <Header title='Competitors' backButtonUrl='/new/options' />
            <IonContent>
                <CompetitorsList competitors={competitors} onCompeteChange={_toggleCompetitor} />
                <AcceptButton disabled={competitors.filter(c => c.compete).length < 4} onClick={createTournament} />
            </IonContent>
        </IonPage>
    );
};

export default withRouter(Competitors);

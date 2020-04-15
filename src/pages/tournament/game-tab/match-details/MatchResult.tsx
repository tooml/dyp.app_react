import React, { useEffect } from 'react';
import { withRouter } from 'react-router'

import {
    IonContent, IonCardContent, IonPage, IonCardHeader, 
    IonList, IonToolbar, IonButtons, IonButton, IonIcon, 
    IonFooter, IonCard
} from '@ionic/react';

import ResultSelection from './ResultSelection';
import MatchHeader from './MatchHeader';
import Header from '../../../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../../state/store/Store';
import { Match, SetResult } from '../../../../contracts/data/Tournament';
import ResetButton from '../../../../components/buttons/ResetButton';
import useMatchSetRule from '../../../../hooks/MatchSetRule';
import { MatchSetParameter } from '../../../../hooks/MatchSetRule';

import produce from 'immer';
import { saveMatchResult, resetMatchResult } from '../../../../state/actions/TournamentAction';

import { checkmarkOutline } from 'ionicons/icons';

const MatchResult: React.FC = () => {

    const dispatch = useDispatch();
    const tournamentId: string = useSelector((state: StoreState) => state.tournamentsState.tournament.id);
    const match: Match = useSelector((state: StoreState) => state.tournamentsState.match);
    const {valid, results, setValid, setResults, handleSetResult} = useMatchSetRule();

    useEffect(() => {
        setValid(false);
        setResults(match.setResults);
    },[match.setResults, setResults, setValid]);


    const setResultChange = (set: number, result: SetResult) => {
        const changedSets = produce(results, draft => {
            draft.splice(set, 1, result);
        });

        const para: MatchSetParameter = { result: changedSets, drawn: match.drawn, sets: match.sets };
        handleSetResult(para);
    }

    const applyMatchResult = () => {
        const state = produce(match, draft => {
            draft.setResults = results
        });

        dispatch(saveMatchResult(state, tournamentId));
        //erzeugt fehler
        // props.history.push('/tournament/game');
    }

    const applyResetMatchResult = () => {
        const state = produce(match, draft => {
            draft.setResults = results.slice(0, match.sets).map(set => SetResult.None);
        });

        const para: MatchSetParameter = { result: state.setResults, drawn: match.drawn, sets: match.sets };
        handleSetResult(para);

        dispatch(resetMatchResult(state, tournamentId));
    }

    return (
        <IonPage>
            <Header title='Edit match' backButtonUrl='/game' />

            <IonCard>
                <IonCardHeader color="secondary">
                    <MatchHeader match={match} results={results} />
                </IonCardHeader>
            </IonCard>
            
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonList lines="none">
                            {results.length > 0 ?
                                results.map((set: SetResult, index: number) => {
                                    return <ResultSelection key={index}
                                        set={index}
                                        home={match.home}
                                        away={match.away}
                                        result={set}
                                        drawn={match.drawn}
                                        onSetResultChange={setResultChange} />
                                }) : <p>Keine Einträge</p>}
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonButtons slot="start">
                        <ResetButton
                            disabled={false}
                            onClick={() => applyResetMatchResult()} />
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton type="button" expand="block"
                            shape="round"
                            color="success"
                            disabled={!valid}
                            onClick={() => applyMatchResult()}>
                            <IonIcon slot="icon-only" icon={checkmarkOutline} />
                        </IonButton>
                        <IonButton disabled={!valid} onClick={() => applyMatchResult()} />
                    </IonButtons>
                </IonToolbar>
            </IonFooter>

        </IonPage>
    );
};

export default withRouter(MatchResult);

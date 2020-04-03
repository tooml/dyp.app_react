import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import {
    IonTabs, IonTabBar, IonTabButton,
    IonIcon, IonLabel,
    IonPage, IonContent, IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { football, list, settings, body } from 'ionicons/icons';

import Header from '../../components/Header';
import Rounds from './game-tab/Rounds';
import MatchResult from './game-tab/match-details/MatchResult';


const pagetwo: React.FC = () => {
    return (
        <IonPage>
            <Header title='pagetwo' backButtonUrl=''/>
            <IonContent>
                <h1>pagetwo</h1>
            </IonContent>
        </IonPage>);
}

const pagethree: React.FC = () => {
    return (
        <IonPage>
            <Header title='pagethree' backButtonUrl=''/>
            <IonContent>
                <h1>pagethree</h1>
            </IonContent>
        </IonPage>);
}

const pagefour: React.FC = () => {
    return (
        <IonPage>
            <Header title='pagefour' backButtonUrl='' />
            <IonContent>
                <h1>pagefour</h1>
            </IonContent>
        </IonPage>);
}

const TournamentTabs: React.FC = () => {
    return (
        <IonPage>
            <IonReactRouter>
                <IonContent>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route path="/tournament/game" component={Rounds} exact={true} />
                            <Route path="/tournament/match/edit" component={MatchResult} />
                            <Route path="/tournament/ranking" component={pagetwo} exact={true} />
                            <Route path="/tournament/options" component={pagethree} exact={true} />
                            <Route path="/tournament/players" component={pagefour} />
                            <Route path="/tournament" render={() => <Redirect to="/tournament/game" />} exact={true} />
                        </IonRouterOutlet>

                        <IonTabBar slot="bottom">
                            <IonTabButton tab="game" href="/tournament/game">
                                <IonIcon icon={'football'} />
                                <IonLabel>Game</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="ranking" href="/tournament/ranking">
                                <IonIcon icon={'list'} />
                                <IonLabel>Ranking</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="options" href="/tournament/options">
                                <IonIcon icon={'settings'} />
                                <IonLabel>Options</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="players" href="/tournament/players">
                                <IonIcon icon={'body'} />
                                <IonLabel>Players</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonContent>
            </IonReactRouter>
        </IonPage>
    );
};

export default TournamentTabs;

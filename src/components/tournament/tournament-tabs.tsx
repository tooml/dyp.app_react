import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import {
    IonTabs, IonTabBar, IonTabButton,
    IonIcon, IonLabel,
    IonPage, IonContent, IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { football, list, settings, body } from 'ionicons/icons';

import Header from '../../layout/page-header/Header';
import FixturesOverview from './game-tab/MatchesOverview';
import ResultEntryCard from './game-tab/match-result/ResultEntry';


const pagetwo: React.FC = () => {
    return (
        <IonPage>
            <Header title='pagetwo' />
            <IonContent>
                <h1>pagetwo</h1>
            </IonContent>
        </IonPage>);
}

const pagethree: React.FC = () => {
    return (
        <IonPage>
            <Header title='pagethree' />
            <IonContent>
                <h1>pagethree</h1>
            </IonContent>
        </IonPage>);
}

const pagefour: React.FC = () => {
    return (
        <IonPage>
            <Header title='pagefour' />
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
                            <Route path="/tournament/game" component={FixturesOverview} exact={true} />
                            <Route path="/tournament/game/edit" component={ResultEntryCard} />
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

        // <IonPage>d
        //     <IonReactRouter>
        //         <IonContent>
        //             <IonTabs>
        //                 <IonRouterOutlet id="tabs">

        //                     <Route path="/tournament/game"  render={() => <FixturesOverview />} exact={true} />
        //                     <Route path="/tournament/game/test" component={ResultEntryCard} exact={true} />
        //                     <Route path="/tournament/ranking" component={pagetwo} exact={true} />
        //                     <Route path="/tournament/options" component={pagethree} exact={true} />
        //                     <Route path="/tournament/players" component={pagefour} exact={true} />
        //                     <Redirect from="/tournament" to="/tournament/game" />
        //                 </IonRouterOutlet>

        //                 <IonTabBar slot="bottom">
        //                     <IonTabButton tab="game" href="/tournament/game">
        //                         <IonIcon icon={football} />
        //                         <IonLabel>Game</IonLabel>
        //                     </IonTabButton>

        //                     <IonTabButton tab="ranking" href="/tournament/ranking">
        //                         <IonIcon icon={list} />
        //                         <IonLabel>Ranking</IonLabel>
        //                     </IonTabButton>

        //                     <IonTabButton tab="options" href="/tournament/options">
        //                         <IonIcon icon={settings} />
        //                         <IonLabel>Options</IonLabel>
        //                     </IonTabButton>

        //                     <IonTabButton tab="players" href="/tournament/players">
        //                         <IonIcon icon={body} />
        //                         <IonLabel>Players</IonLabel>
        //                     </IonTabButton>
        //                 </IonTabBar>

        //             </IonTabs>
        //         </IonContent>
        //     </IonReactRouter>
        // </IonPage>
    );
};

export default TournamentTabs;

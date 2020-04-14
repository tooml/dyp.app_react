import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import {
    IonTabs, IonTabBar, IonTabButton,
    IonIcon, IonLabel,
    IonPage, IonContent, IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { football, list, settings, body } from 'ionicons/icons';

import Rounds from './game-tab/Rounds';
import Ranking from './ranking-tab/Ranking';
import Players from './players-tab/Players';
import Options from './option-tab/TournamentOptions';
import MatchResult from './game-tab/match-details/MatchResult';

const TournamentTabs: React.FC = () => {
    return (
        <IonPage>
            <IonReactRouter>
                <IonContent>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route path="/game"  render={() => <Rounds  />} exact={true}/>
                            <Route path="/edit" render={() => <MatchResult  />} exact={true} />
                            <Route path="/ranking" component={Ranking} exact={true}/>
                            <Route path="/options" component={Options} exact={true}/>
                            <Route path="/players"  component={Players} exact={true}/>
                            <Route path="/tournament" render={() => <Redirect to="/game" />} />
                            {/* https://github.com/aaronksaunders/ionic-react-tabs-tut */}
                        </IonRouterOutlet>

                        <IonTabBar slot="bottom">
                            <IonTabButton tab="game" href="/game">
                                <IonIcon icon={'football'} />
                                <IonLabel>Game</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="ranking" href="/ranking">
                                <IonIcon icon={'list'} />
                                <IonLabel>Ranking</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="options" href="/options">
                                <IonIcon icon={'settings'} />
                                <IonLabel>Options</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="players" href="/players">
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

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonSplitPane, IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './Menu';
import Home from './pages/home/Home';
import Persons from './pages/persons-management/persons/Persons';
import PersonEdit from './pages/persons-management/persons/PersonEdit';
import TournamentName from './pages/new-tournament/name-dialog/TournamentName';
import TournamentOptions from './pages/new-tournament/options-dialog/CreateTournamentOptions';
import Competitors from './pages/new-tournament/competitors-dialog/Competitors';
import Tournaments from './pages/load-tournament/load-dialog/Tournaments';
import TournamentTabs from './pages/tournament/TournamentTabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './style.scss';

/* Theme variables */
import './theme/variables.css';

import ToatsMessage from './components/ToastMessenger';
import { home, people, play, construct, trophy } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { StoreState } from './state/store/Store';

const App: React.FC = () => {

  const tournamentId: string = useSelector((state: StoreState) => state.tournamentsState.tournament.id);

  console.log(tournamentId);
  const appPages: AppPage[] = [
    {
      title: 'Home',
      url: '/home',
      icon: home,
      disabled: false
    },
    {
      title: 'Persons',
      url: '/persons',
      icon: people,
      disabled: false
    },
    {
      title: 'New Tournament',
      url: '/new',
      icon: construct,
      disabled: false
    },
    {
      title: 'Load Tournament',
      url: '/load',
      icon: play,
      disabled: false
    },
    {
      title: 'Tournament',
      url: '/tournament',
      icon: trophy,
      disabled: tournamentId.length === 0
    }
  ];

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu appPages={appPages} />
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} />
            <Route path="/persons" component={Persons} />
            <Route path="/edit/person" component={PersonEdit} />
            <Route path="/new/options" component={TournamentOptions} />
            <Route path="/new/competitors" component={Competitors} />
            <Route path="/new" component={TournamentName} />
            <Route path="/load" component={Tournaments} />
            <Route path="/tournament" component={TournamentTabs} />
            <Route path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <ToatsMessage />
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>)
};

export default App;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './layout/menu/Menu';
import Home from './components/home/Home';
import Persons from './components/persons-management/persons/Persons';
import PersonEdit from './components/persons-management/persons/PersonEdit';
import TournamentName from './components/new-tournament/name-dialog/TournamentName';
import TournamentOptions from './components/new-tournament/options-dialog/TournamentOptions';
import Competitors from './components/new-tournament/competitors-dialog/Competitors';
import { home, list } from 'ionicons/icons';

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

/* Theme variables */
import './theme/variables.css';

import ToatsMessage from './components/toast/ToastMessenger';

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'Persons',
    url: '/persons',
    icon: list
  },
  {
    title: 'New Tournament',
    url: '/new',
    icon: list
  }
];

const App: React.FC = () => (
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
          
          <Route path="/" render={() => <Redirect to="/home" />}/>
        </IonRouterOutlet>
        <ToatsMessage />
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage
} from '@ionic/react';

import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { fetchPersonAvatars } from '../../state/actions/PersonActions';

const HomePage: React.FC = () => {

  const dispatch = useDispatch();
  const renderTime = 1;

  useEffect(() => {
    console.log('getch avatar')
    dispatch(fetchPersonAvatars());
  }, [dispatch, renderTime]);

  return (
    <IonPage>
      <Header title='Home' backButtonUrl='' />

      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/city.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Draw your Partner</IonCardSubtitle>
            <IonCardTitle>Welcome to DYP App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              bla... bla, bla bla... bla bla... bla
              bla... bla bla, bal... bla bla. blabla
              bla... bla, bla bla... bla bla... bla
              bla... bla bla, bal... bla bla.
              bla... bla, bla bla... bla bla... bla
              bla... bla bla, bal... bla bla. Blub.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

import React from 'react';

import Header from '../../../components/Header';
import NameEdit from './NameEdit';

import { IonContent, IonPage } from '@ionic/react';
import { RouteComponentProps, withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { setTournamentName } from '../../../state/actions/OptionsActions';

const TournamentName: React.FC<RouteComponentProps> = (props) => {

    const dispatchStore = useDispatch();

    const onTournamentNameChange = (name: string) => {
        dispatchStore(setTournamentName(name));
        props.history.push('/new/options');
    }

    return (
        <IonPage>
         <Header title='New Tournament' backButtonUrl=''/>
            <IonContent>
                    <NameEdit onSubmit={onTournamentNameChange}/>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(TournamentName);

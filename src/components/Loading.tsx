import React from 'react';
import { IonLoading } from '@ionic/react';
import { useSelector } from 'react-redux';
import { StoreState } from '../state/store/Store';


const Loading: React.FC = () => {

    const loading: boolean = useSelector((state: StoreState) => state.loadingState.loading);

    return (
        <IonLoading
            isOpen={loading}
            message={'Daten werden geladen...'}
            spinner="bubbles"
            showBackdrop={true}
        />
    );
};

export default Loading;
import React, { useState, useEffect } from 'react';

import { IonToast, } from '@ionic/react';
import { StoreState } from '../state/store/Store';
import { useSelector } from 'react-redux';

const ToatsMessage: React.FC = () => {

    const [showToast, setShowToast] = useState(false);

    const messageId: string = useSelector((state: StoreState) => state.messageState.id);
    const message: string = useSelector((state: StoreState) => state.messageState.message);
    const color: string = useSelector((state: StoreState) => state.messageState.color);
    const duration: number = useSelector((state: StoreState) => state.messageState.duration);

    useEffect(() => {
        if (messageId) {
            setShowToast(true);
        }
    }, [messageId]);

    return (
        <IonToast
            color={color}
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={message}
            duration={duration} 
            position="middle" />
    );
};

export default ToatsMessage;
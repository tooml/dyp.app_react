import React, { useState, useEffect } from 'react';

import { IonToast, IonContent,   } from '@ionic/react';
import { StoreState } from '../../state/store/Store';
import { useSelector } from 'react-redux';

interface ToastProps {
    message: string;
}

const ToatsMessage: React.FC = () => {

    const [showToast, setShowToast] = useState(false);

    const messageId: string = useSelector((state: StoreState) => state.messageState.id);
    const message: string = useSelector((state: StoreState) => state.messageState.message);
    const color: string = useSelector((state: StoreState) => state.messageState.color);

    useEffect(() => {
        if(messageId) {
            setShowToast(true);
        }
      }, [messageId]);

    return (
        <IonContent>
          <IonToast
            color={color}
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={message}
            duration={1500}
        />
        </IonContent>
    );
};

export default ToatsMessage;
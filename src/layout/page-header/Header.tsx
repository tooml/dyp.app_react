import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

interface HeaderProps {
    title: string,
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <IonHeader>
            <IonToolbar>
                {/* <IonButtons slot="start">
                    <IonBackButton defaultHref="/tournament/game" />
                </IonButtons> */}
                <IonTitle>{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;

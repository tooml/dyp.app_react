import React from 'react';
import {
    IonHeader, IonToolbar, IonTitle,
    IonBackButton, IonButtons, IonMenuButton
} from '@ionic/react';

interface HeaderProps {
    title: string,
    backButtonUrl: string,
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <IonHeader>
            <IonToolbar>
                {props.backButtonUrl.length === 0 ?
                    (<IonMenuButton slot="start" autoHide={true} />) :
                    (<IonButtons slot="start">
                        <IonBackButton defaultHref={props.backButtonUrl} />
                    </IonButtons>)}
                <IonTitle>{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;

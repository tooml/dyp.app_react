import React from 'react';

import { IonIcon, IonFab, IonFabButton} from '@ionic/react';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';

interface PersonAddProps {
    newPerson: Function 
}

const AddPerson: React.FC<PersonAddProps> = (props) => {
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton type="button" routerLink={'/edit/person'} onClick={() => props.newPerson()}>
                <IonIcon icon={add} />
            </IonFabButton>
        </IonFab>
    );
};

export default AddPerson;
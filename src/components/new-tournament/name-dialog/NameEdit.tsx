import React, { useState } from "react";

import AcceptButton from "../../../layout/accept-buttons/AcceptButton";

import {
    IonContent, IonCard, IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonInput,
    IonItem,
    IonGrid,
    IonRow,
    IonCol
} from "@ionic/react";

export interface NameEditProps {
    onSubmit: (value: string) => void
}

const NameEdit: React.FC<NameEditProps> = (props) => {

    const [tournamentName, setTournamentName] = useState();

    return (
        <IonContent>
            <IonGrid>

                <form onSubmit={event => {
                    event.preventDefault();
                    props.onSubmit(tournamentName);
                }}>
                    <IonRow class="align-items-center">
                        <IonCol size="2" />
                        <IonCol size="8">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>You need a name for your Tournament</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <IonItem>
                                        <IonInput name="tournamentName"
                                            placeholder="Enter Name"
                                            type="text"
                                            value={tournamentName}
                                            onInput={event => setTournamentName((event.target as HTMLInputElement).value)}
                                            maxlength={20}
                                            minlength={4}
                                            required={true} />
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="2" />
                    </IonRow>
                    <AcceptButton />
                </form>

            </IonGrid>
        </IonContent>
    );
};

export default NameEdit;

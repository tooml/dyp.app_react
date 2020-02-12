import React from 'react';
import { IonContent, IonList } from '@ionic/react';

import Tournament from '../../../contracts/data/Tournament';
import TournamentItem from './TournamentItem';

interface TournamentsListProps {
    tournaments: Tournament[],
}

const TournamentsList: React.FC<TournamentsListProps> = (props) => {
    return (
        <IonContent>
            <IonList lines="none">
                {props.tournaments.length ?
                    props.tournaments.map((tournament: Tournament) => {
                        return <TournamentItem key={tournament.id} tournament={tournament} />
                    }) : <p>Keine Einträge {props.tournaments.length}</p>}
            </IonList>
        </IonContent>
    );
};

export default TournamentsList;

import React from 'react';
import { IonContent, IonList } from '@ionic/react';

import TournamentInfo from '../../../contracts/data/TournamentInfo';
import TournamentItem from './TournamentItem';

interface TournamentsListProps {
    tournaments: TournamentInfo[],
    loadTournament: Function
}

const TournamentsList: React.FC<TournamentsListProps> = (props) => {
    return (
        <IonContent>
            <IonList lines="none">
                {props.tournaments.length ?
                    props.tournaments.map((tournament: TournamentInfo) => {
                        return <TournamentItem key={tournament.id} 
                                               tournament={tournament} 
                                               loadTournament={props.loadTournament} />
                    }) : <p>Keine Einträge {props.tournaments.length}</p>}
            </IonList>
        </IonContent>
    );
};

export default TournamentsList;

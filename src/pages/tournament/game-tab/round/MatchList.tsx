import React from 'react';

import {
    IonList,
    IonItem
} from '@ionic/react';

import MatchListItem from './MatchListItem';
import RoundHeader from '../../../../components/RoundHeader';
import { Match } from '../../../../contracts/data/Tournament';

interface MatchListProps {
    name: string,
    matches: Match[],
    selectMatch: Function
}

const MatchList: React.FC<MatchListProps> = (props) => {
    return (
        <IonItem>
            <IonList lines="none">
                <RoundHeader name={props.name} />
                {props.matches.length ?
                    props.matches.map((match: Match) => {
                        return <MatchListItem key={match.id}
                            match={match}
                            selectMatch={props.selectMatch} />
                    }) : <p>Keine Einträge {props.matches.length}</p>}
            </IonList>
        </IonItem>
    );
};

export default MatchList;

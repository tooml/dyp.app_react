import React from 'react';

import TeamItem from '../../../../components/TeamItem';
import { Match } from '../../../../contracts/data/Tournament';
import './MatchListItem.scss';
import { IonItem } from '@ionic/react';
import useMatchResult from '../../../../hooks/MatchResult';

interface MatchListItemProps {
    match: Match;
    selectMatch: Function
}

const MatchListItem: React.FC<MatchListItemProps> = (props) => {

    const { home, away } = useMatchResult(props.match.setResults);
    
    return (
        <IonItem routerLink={'/edit'} routerDirection="forward" button={true} onClick={() => props.selectMatch(props.match)}>
            <div id="match-container">
                <div id="table-label">Match auf Table {props.match.table}</div>

                <div id="home-team">
                    <TeamItem team={props.match.home} home={true} shortName={true} />
                </div>

                <div id="result-btn">
                    {home} : {away}
                </div>

                <div id="away-team">
                    <TeamItem team={props.match.away} home={false} shortName={true} />
                </div>
            </div>
        </IonItem>
    );
};

export default MatchListItem;

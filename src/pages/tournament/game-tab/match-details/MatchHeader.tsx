import React from 'react';

import { Match, SetResult } from '../../../../contracts/data/Tournament';
import TeamItem from '../../../../components/TeamItem';
import useMatchResult from '../../../../hooks/MatchResult';
import './MatchHeader.scss';

interface MatchHeaderProps {
    match: Match,
    results: SetResult[]
}

const MatchHeader: React.FC<MatchHeaderProps> = (props) => {

    const { home, away } = useMatchResult(props.results);

    return (
        <div id="match-header-container">
            <div id="home-team">
                <TeamItem team={props.match.home} home={true} shortName={false}/>
            </div>
            <div id="home-result">{home}</div>

            <div id="text">vs</div>

            <div id="away-team">
                <TeamItem team={props.match.away} home={false} shortName={false}/>
            </div>
            <div id="away-result">{away}</div>
        </div>
    );
};

export default MatchHeader;

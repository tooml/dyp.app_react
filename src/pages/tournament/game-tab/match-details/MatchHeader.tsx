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
            <div id="header-home">Home</div>
            <div id="header-home-team">
                <TeamItem team={props.match.home} home={true} shortName={false} size='medium' />
            </div>
            <div id="header-home-result"><span className='result'>{home}</span></div>

            <div id="header-text">vs</div>

            <div id="header-away">Away</div>
            <div id="header-away-team">
                <TeamItem team={props.match.away} home={true} shortName={false} size='medium'/>
            </div>
            <div id="header-away-result"><span className='result'>{away}</span></div>
        </div>
    );
};

export default MatchHeader;

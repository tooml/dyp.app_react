import React from 'react';

import { Team } from '../contracts/data/Tournament';
import HomePlayerItem from './HomePlayerItem';
import AwayPlayerItem from './AwayPlayerItem';

import './TeamItem.scss';

interface TeamItemProps {
    team: Team,
    home: boolean,
    shortName: boolean,
    size: string
}

const TeamItem: React.FC<TeamItemProps> = (props) => {
    const isHome = props.home;
    if (isHome) {
        return (
            <div id="team-container">
                <div id="player-one">
                    <HomePlayerItem
                        player={props.team.playerOne}
                        shortName={props.shortName}
                        size={props.size} />
                </div>
                <div id="player-two">
                    <HomePlayerItem
                        player={props.team.playerTwo}
                        shortName={props.shortName}
                        size={props.size} />
                </div>
            </div>);
    }
    return (
        <div id="team-container">
            <div id="player-one">
                <AwayPlayerItem
                    player={props.team.playerOne}
                    shortName={props.shortName}
                    size={props.size} />
            </div>
            <div id="player-two">
                <AwayPlayerItem
                    player={props.team.playerTwo}
                    shortName={props.shortName}
                    size={props.size} />
            </div>
        </div>
    );
};

export default TeamItem;

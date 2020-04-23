import React from 'react';
import { Player } from '../contracts/data/Tournament';

import './AwayPlayerItem.scss';
import Avatar from './Avatar';

interface AwayPlayerItemProps {
    player: Player,
    shortName: boolean,
    size: string
}

const AwayPlayerItem: React.FC<AwayPlayerItemProps> = (props) => {
    return (
        <div id="away-container">
            {props.shortName ? <div id="away-player">{props.player.fullNameShort}</div> :
                <div id="away-player">{props.player.fullName}</div>}
            <div id="away-player-pic">
                <Avatar avatarSrc={props.player.image} size={props.size} />
            </div>
        </div>
    )
};

export default AwayPlayerItem;

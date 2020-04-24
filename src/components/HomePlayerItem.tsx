import React from 'react';
import { Player } from '../contracts/data/Tournament';

import './HomePlayerItem.scss';
import Avatar from './Avatar';

interface HomePlayerItemProps {
    player: Player,
    shortName: boolean,
    size: string
}

const HomePlayerItem: React.FC<HomePlayerItemProps> = (props) => {
    return (
        <div id="home-container">
            {props.shortName ? <div id="home-player">{props.player.fullNameShort}</div> :
                <div id="home-player">{props.player.fullName}</div>}
            <div id="home-player-pic">
                <Avatar personId={props.player.id} avatarSrc={''} size={props.size} />
            </div>
        </div>
    )
};

export default HomePlayerItem;

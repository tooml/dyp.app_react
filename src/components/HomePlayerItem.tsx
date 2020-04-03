import React from 'react';
import { IonIcon } from '@ionic/react';
import { Player } from '../contracts/data/Tournament';
import { personCircleOutline } from 'ionicons/icons';

import './HomePlayerItem.scss';

interface HomePlayerItemProps {
    player: Player,
    shortName: boolean
}

const HomePlayerItem: React.FC<HomePlayerItemProps> = (props) => {
    return (
        <div id="home-container">
            {props.shortName ? <div id="home-player">{props.player.fullNameShort}</div> :
                <div id="home-player">{props.player.fullName}</div>}
            <div id="home-player-pic"><IonIcon icon={personCircleOutline} /></div>
        </div>
    )
};

export default HomePlayerItem;

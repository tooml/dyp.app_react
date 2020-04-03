import React from 'react';
import { IonIcon } from '@ionic/react';
import { Player } from '../contracts/data/Tournament';
import { personCircleOutline } from 'ionicons/icons';

import './AwayPlayerItem.scss';

interface AwayPlayerItemProps {
    player: Player,
    shortName: boolean
}

const AwayPlayerItem: React.FC<AwayPlayerItemProps> = (props) => {
    return (
        <div id="away-container">
            {props.shortName ?  <div id="away-player">{props.player.fullNameShort}</div> :  
            <div id="away-player">{props.player.fullName}</div>}
            <div id="away-player-pic"><IonIcon icon={personCircleOutline} /></div>
        </div>
    )
};

export default AwayPlayerItem;

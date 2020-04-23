import React from 'react';
import {
    IonAvatar
} from '@ionic/react';

import './Avatar.scss';

interface AvatarProps {
    avatarSrc: string,
    size: string
}

const Avatar: React.FC<AvatarProps> = (props) => {

    const avatarStyle = () => { 
        switch(props.size) { 
            case 'big': return 'person-avatar-big';
            case 'medium': return 'person-avatar-medium';
            case 'small': return 'person-avatar-small'; 
            default: return 'person-avatar-medium';
         } 
    }
    
    return (
        <IonAvatar className={avatarStyle()}>
            {props.avatarSrc.length > 0 ?
                <img src={props.avatarSrc} alt='' /> :
                <img src='/assets/avatar.jpg' alt='' />
            }
        </IonAvatar>
    );
}

export default Avatar;

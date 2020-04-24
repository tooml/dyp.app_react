import React from 'react';
import {
    IonAvatar
} from '@ionic/react';

import './Avatar.scss';
import { useSelector } from 'react-redux';
import { StoreState } from '../state/store/Store';

interface AvatarProps {
    personId: string,
    avatarSrc: string,
    size: string
}

const Avatar: React.FC<AvatarProps> = (props) => {

    const personAvatar: string | undefined = useSelector((state: StoreState) =>
        state.personsState.avatars.find(av => av.personId === props.personId)?.avatar);

    const avatarStyle = () => {
        switch (props.size) {
            case 'big': return 'person-avatar-big';
            case 'medium': return 'person-avatar-medium';
            case 'small': return 'person-avatar-small';
            default: return 'person-avatar-medium';
        }
    }

    return (
        <IonAvatar className={avatarStyle()}>
            {(props.avatarSrc.length > 0) ?
                <img src={props.avatarSrc} alt='' /> :
                (personAvatar === undefined || personAvatar.length === 0) ?
                    <img src='/assets/avatar.jpg' alt='' /> :
                    <img src={personAvatar} alt='' />
            }
        </IonAvatar>
    );
}

export default Avatar;

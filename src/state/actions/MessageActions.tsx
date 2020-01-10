import ToastMessage from '../../contracts/data/ToastMessage';

export const SHOW_MESSAGE = 'SHOW_MESSAGE'

export interface ShowMessageAction {
    type: typeof SHOW_MESSAGE;
    payload: ToastMessage,
}

export type MessageActionTypes = ShowMessageAction

export const createToastMessage = (message: string, color: string) => {
    const uuidv5 = require('uuid/v4');
    return {
        id: uuidv5(),
        message: message,
        color: color
    }
}
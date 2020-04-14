import { SHOW_MESSAGE, MessageActionTypes } from '../actions/MessageActions';
import { MessageState, initialMessageState } from '../store/MessageStore';

export function messageReducer(messageState: MessageState = initialMessageState, action: MessageActionTypes): MessageState {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...messageState,
        id: action.payload.id,
        message: action.payload.message,
        color: action.payload.color,
        duration: action.payload.duration
      }

    default:
      return messageState;
  }
}

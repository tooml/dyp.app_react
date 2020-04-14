
export interface MessageState {
    id: string,
    message: string;
    color: string;
    duration: number;
}

export const initialMessageState: MessageState = {
    id: '',
    message: '',
    color: '',
    duration: 600
}

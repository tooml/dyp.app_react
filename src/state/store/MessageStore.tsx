
export interface ToastMessage {
    id: string,
    message: string,
    color: string
}

export interface MessageState {
    id: string,
    message: string;
    color: string;
}

export const initialMessageState: MessageState = {
    id: "",
    message: "",
    color: ""
}

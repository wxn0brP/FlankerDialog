export interface FD_uiMessage__opts {
    displayTime?: number;
    className?: string;
    backgroundColor?: string;
    onClick?: () => void;
}
export interface FD_uiMsg__opts {
    extraTime?: number;
    onClick?: () => void;
}
export interface FD_selectPromptCategory<T> {
    name: string;
    options: T[];
    value?: T;
}

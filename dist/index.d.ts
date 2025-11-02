import "@wxn0brp/flanker-ui/html";
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
export declare const uiMessagesDiv: HTMLDivElement;
export declare const promptDiv: HTMLDivElement;
export declare let langFunc: (text: string, ...data: any[]) => string;
export declare function setLangFunc(func: typeof langFunc): void;
export declare function uiMessage(message: string, opts?: FD_uiMessage__opts): Promise<void>;
export declare function uiMsg(data: string, opts?: FD_uiMsg__opts): Promise<void>;
export declare function uiMsgT(text: string, ...data: any): Promise<void>;
export declare function prompt(text: string, defaultValue?: string): Promise<string>;
export declare function confirm(text: string, yesText?: string, noText?: string): Promise<boolean>;
export declare function selectPrompt<T>(text: string, options: string[], optionsValues?: any[], categories?: FD_selectPromptCategory<T>[]): Promise<string | T>;
export declare function promptTime(text: string, inputType?: "time" | "date" | "datetime" | "datetime-local", min?: number, max?: number): Promise<string>;

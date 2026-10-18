export declare let langFunc: (text: string, ...data: any[]) => string;
export declare function setLangFunc(func: typeof langFunc): void;
export declare function uiMsgT(text: string, ...data: any): Promise<void>;

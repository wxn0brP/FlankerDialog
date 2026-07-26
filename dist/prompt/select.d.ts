import { FD_selectPromptCategory } from "../types.js";
export declare function selectPrompt<T>(text: string, options: string[], optionsValues?: any[], categories?: FD_selectPromptCategory<T>[]): Promise<string | T>;

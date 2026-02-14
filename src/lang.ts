import { uiMsg } from "./msg";

export let langFunc = (text: string, ...data: any[]) => {
    return text.replace(/\\\$|(?<!\\)\$/g, (match) => {
        if (match === "\\$") return "$";
        return data.shift()?.toString() || "$";
    });
}

export function setLangFunc(func: typeof langFunc) {
    langFunc = func;
}

export async function uiMsgT(text: string, ...data: any) {
    let lastText = "";
    if (data.length > 0) {
        if (Array.isArray(data[0])) {
            lastText = data.shift();
        }
    }

    text = langFunc(text, ...data) + lastText;
    await uiMsg(text);
}

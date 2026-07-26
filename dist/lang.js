import { uiMsg } from "./msg/index.js";
export let langFunc = (text, ...data) => {
    return text.replace(/\\\$|(?<!\\)\$/g, match => {
        if (match === "\\$")
            return "$";
        return data.shift()?.toString() || "$";
    });
};
export function setLangFunc(func) {
    langFunc = func;
}
export async function uiMsgT(text, ...data) {
    let lastText = "";
    if (data.length > 0) {
        if (Array.isArray(data[0])) {
            lastText = data.shift();
        }
    }
    text = langFunc(text, ...data) + lastText;
    await uiMsg(text);
}

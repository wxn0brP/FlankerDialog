import "@wxn0brp/flanker-ui/html";
import { uiMsgT } from "./lang.js";
import { uiMsg } from "./msg/index.js";
import { uiMessage } from "./msg/message.js";
import { selectPrompt } from "./prompt/select.js";
import { timePrompt } from "./prompt/time.js";
window.FD = {
    uiMessage,
    uiMsg,
    uiMsgT,
    confirm,
    prompt,
    selectPrompt,
    promptTime: timePrompt,
};
export * from "./confirm.js";
export * from "./lang.js";
export * from "./msg/index.js";
export * from "./msg/message.js";
export * from "./prompt/index.js";
export * from "./prompt/select.js";
export * from "./prompt/time.js";
export * from "./types.js";
export * from "./vars.js";

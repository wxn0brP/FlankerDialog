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

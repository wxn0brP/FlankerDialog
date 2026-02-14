import "@wxn0brp/flanker-ui/html";
import { uiMsgT } from "./lang";
import { uiMsg } from "./msg";
import { uiMessage } from "./msg/message";
import { selectPrompt } from "./prompt/select";
import { timePrompt } from "./prompt/time";

(window as any).FD = {
    uiMessage,
    uiMsg,
    uiMsgT,
    confirm,
    prompt,
    selectPrompt,
    promptTime: timePrompt,
}

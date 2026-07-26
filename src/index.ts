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
};

export * from "./confirm";
export * from "./lang";
export * from "./msg/index";
export * from "./msg/message";
export * from "./prompt/index";
export * from "./prompt/select";
export * from "./prompt/time";
export * from "./types";
export * from "./vars";

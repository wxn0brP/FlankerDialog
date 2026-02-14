import { FD_uiMessage__opts, FD_uiMsg__opts } from "../types";
import { uiMessage } from "./message";

export async function uiMsg(data: string, opts: FD_uiMsg__opts = {}) {
    opts = {
        extraTime: 0,
        ...opts
    };

    const speed = 1 / 3; //1s = 3 words
    const time = data.split(" ").length * speed + 6 + opts.extraTime;

    const msgOpts: FD_uiMessage__opts = {
        displayTime: time * 1000,
        className: "uiMsg",
    };
    if (opts.onClick) msgOpts.onClick = opts.onClick;

    await uiMessage(data, msgOpts);
}

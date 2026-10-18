import { uiMessage } from "./message.js";
export async function uiMsg(data, opts = {}) {
    opts = {
        extraTime: 0,
        ...opts,
    };
    const speed = 1 / 3; //1s = 3 words
    const time = data.split(" ").length * speed + 6 + opts.extraTime;
    const msgOpts = {
        displayTime: time * 1000,
        className: "uiMsg",
    };
    if (opts.onClick)
        msgOpts.onClick = opts.onClick;
    await uiMessage(data, msgOpts);
}

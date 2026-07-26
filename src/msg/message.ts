import { delay } from "@wxn0brp/flanker-ui/utils";
import { FD_uiMessage__opts } from "../types";
import { uiMessagesDiv } from "../vars";

export async function uiMessage(
	message: string,
	opts: FD_uiMessage__opts = {},
) {
	opts = {
		displayTime: 6000,
		...opts,
	};
	const div = document.createElement("div");
	div.innerHTML = message;

	div.style.top = `-${div.offsetHeight + 20}px`;
	if (opts.className) div.classList.add(opts.className);
	if (opts.backgroundColor) div.style.backgroundColor = opts.backgroundColor;

	const padding = 10;
	const topPosition = calculateTopPosition();

	function calculateTopPosition() {
		let top = 0;
		for (const child of uiMessagesDiv.children)
			top += (child as HTMLDivElement).offsetHeight + padding;
		return top;
	}

	let ended = false;

	async function end() {
		ended = true;
		div.style.top = `-${div.offsetHeight + 20}px`;

		await delay(700);
		for (const child of uiMessagesDiv.children) {
			const childE = child as HTMLDivElement;
			const currentTop = parseInt(childE.style.top.replace("px", ""));
			childE.style.top = `${currentTop - padding - div.offsetHeight}px`;
		}
		div.remove();
	}

	div.addEventListener("click", end);
	if (opts.onClick) div.addEventListener("click", opts.onClick);

	uiMessagesDiv.appendChild(div);
	await delay(100);
	div.style.top = `${10 + topPosition}px`;

	await delay(opts.displayTime - 700);
	if (ended) return;
	await end();
}
